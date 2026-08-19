type RefreshState = {
  revision: number;
  instance: string;
};

// Keep the free local automation responsive without generating continuous traffic or WebSocket retries.
const POLL_INTERVAL_MS = 1_500;

/**
 * Development-only refresh automation for previews whose reverse proxy does
 * not permit Vite WebSockets. It uses short ordinary-HTTPS polling and
 * reloads only after the watched source revision changes.
 */
export function startDevelopmentRefreshAgent() {
  if (!import.meta.env.DEV || typeof window === "undefined") return;

  let stopped = false;
  let revision = -1;
  let instance: string | undefined;
  let retryTimer: number | undefined;

  const schedule = (delay: number) => {
    if (stopped) return;
    retryTimer = window.setTimeout(() => void poll(), delay);
  };

  const poll = async (): Promise<void> => {
    try {
      const response = await fetch(`/__manus__/dev-refresh?revision=${revision}`, {
        cache: "no-store",
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error(`Refresh agent returned ${response.status}`);

      const next = (await response.json()) as RefreshState;
      const revisionChanged = revision >= 0 && next.revision > revision;
      const serverRestarted = instance !== undefined && instance !== next.instance;

      revision = next.revision;
      instance = next.instance;

      if (revisionChanged || serverRestarted) {
        window.location.reload();
        return;
      }
      schedule(POLL_INTERVAL_MS);
    } catch {
      // A development-server restart briefly interrupts the request. Retrying
      // keeps the browser usable and detects the new server instance safely.
      schedule(POLL_INTERVAL_MS);
    }
  };

  window.addEventListener(
    "pagehide",
    () => {
      stopped = true;
      if (retryTimer !== undefined) window.clearTimeout(retryTimer);
    },
    { once: true },
  );

  void poll();
}
