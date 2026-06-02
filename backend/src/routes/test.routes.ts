// @ts-ignore: express types are not installed in this environment
import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json({
    success: true,
    message: "Backend is working"
  });
});

export default router;
