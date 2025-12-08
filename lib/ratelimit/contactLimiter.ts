import { Ratelimit } from "@upstash/ratelimit";
import { redis } from "@/lib/redis/client";

export const contactRateLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "1 m"),
});
