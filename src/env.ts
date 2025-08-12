import { validateEnv } from "#base";
import { z } from "zod";

export const env = validateEnv(z.object({
    BOT_TOKEN: z.string("Discord Bot Token is required").min(1),
    WEBHOOK_LOGS_URL: z.url().optional(),
    MONGO_URI: z.string("MongoDb URI is required").min(1),
    DATABASE_NAME: z.string().optional()
}));