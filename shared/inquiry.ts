import { z } from "zod";

export const inquiryTopics = ["architecture", "paylock", "research", "partnership", "other"] as const;

export const inquiryTopicLabels: Record<(typeof inquiryTopics)[number], string> = {
  architecture: "System architecture",
  paylock: "PayLock evaluation",
  research: "Research collaboration",
  partnership: "Partnership",
  other: "Other",
};

export const inquirySchema = z.object({
  fullName: z.string().trim().min(2, "Enter your name.").max(120, "Name is too long."),
  email: z.string().trim().email("Enter a valid email address.").max(320, "Email is too long."),
  organization: z.string().trim().max(160, "Organization is too long.").optional().default(""),
  topic: z.enum(inquiryTopics),
  message: z.string().trim().min(20, "Please provide at least 20 characters.").max(4000, "Message is too long."),
  // This hidden field is deliberately accepted at validation time. The server
  // treats any populated value as automation and returns without persistence.
  website: z.string().max(200).optional().default(""),
});

export type InquiryInput = z.infer<typeof inquirySchema>;
