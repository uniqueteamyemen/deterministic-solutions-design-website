import type { Request, Response, Router } from "express";
import { Router as createRouter } from "express";
import mysql, { type Pool } from "mysql2/promise";
import { inquirySchema } from "../shared/inquiry";

const WINDOW_MS = 10 * 60 * 1000;
const REQUEST_LIMIT = 5;
const requestsByAddress = new Map<string, { count: number; resetAt: number }>();
let pool: Pool | undefined;

function getPool() {
  if (pool) return pool;
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) throw new Error("DATABASE_URL is not configured");
  pool = mysql.createPool(databaseUrl);
  return pool;
}

function canSubmit(request: Request) {
  const now = Date.now();
  const address = request.ip || request.socket.remoteAddress || "unknown";
  const window = requestsByAddress.get(address);
  if (!window || window.resetAt <= now) {
    requestsByAddress.set(address, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  if (window.count >= REQUEST_LIMIT) return false;
  window.count += 1;
  return true;
}

export function createInquiryRouter(): Router {
  const router = createRouter();

  router.post("/", async (request: Request, response: Response) => {
    const parsed = inquirySchema.safeParse(request.body);
    if (!parsed.success) {
      response.status(422).json({ error: "Please review the highlighted fields." });
      return;
    }
    if (parsed.data.website) {
      // Honeypot requests receive a generic acknowledgement and create no row.
      response.status(202).json({ accepted: true });
      return;
    }
    if (!canSubmit(request)) {
      response.status(429).json({ error: "Too many requests. Please try again later." });
      return;
    }

    try {
      await getPool().execute(
        `INSERT INTO inquiries (fullName, email, organization, topic, message, sourcePath)
         VALUES (?, ?, ?, ?, ?, ?)`,
        [
          parsed.data.fullName,
          parsed.data.email,
          parsed.data.organization || null,
          parsed.data.topic,
          parsed.data.message,
          "/contact",
        ],
      );
      response.status(201).json({ accepted: true });
    } catch (error) {
      console.error("Inquiry storage failed", error);
      response.status(503).json({ error: "The inquiry channel is temporarily unavailable. Please email the team directly." });
    }
  });

  return router;
}
