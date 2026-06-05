// @ts-ignore: express types are not installed in this environment
import { Router, Request, Response } from "express";

const router = Router();

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Health check endpoint
 *     tags: [System]
 *     description: Check if the backend server is running
 *     responses:
 *       200:
 *         description: Server is healthy
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Backend is working
 *       500:
 *         description: Server error
 */
router.get("/", (req: Request, res: Response) => {
  res.json({
    success: true,
    message: "Backend is working"
  });
});

export default router;