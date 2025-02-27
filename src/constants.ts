import { configDotenv } from "dotenv";

configDotenv();

export const VIRTUALS_AGENT_API_KEY = process.env.VIRTUALS_AGENT_API_KEY!;

export const X_API_KEY = process.env.X_API_KEY!;
export const X_API_KEY_SECRET = process.env.X_API_KEY_SECRET!;
export const X_ACCESS_TOKEN = process.env.X_ACCESS_TOKEN!;
export const X_ACCESS_TOKEN_SECRET = process.env.X_ACCESS_TOKEN_SECRET!;
