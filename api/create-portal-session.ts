import type { VercelRequest, VercelResponse } from "@vercel/node";
import { handleCreatePortalSession } from "../server/handlers/create-portal-session.js";
import { ApiError, toErrorMessage } from "../server/lib/errors.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const result = await handleCreatePortalSession(req.body);
    return res.status(200).json(result);
  } catch (error) {
    const status = error instanceof ApiError ? error.statusCode : 500;
    return res.status(status).json({ error: toErrorMessage(error) });
  }
}
