import { Router } from "express";

import {
  getCategories,
  createCategory,
} from "../controllers/category.controller";

import { authenticate }
from "../middleware/auth.middleware";

import { authorizeRoles }
from "../middleware/role.middleware";

const router = Router();

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Get all categories
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: List of all categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category'
 *       500:
 *         description: Server error
 */
router.get("/", getCategories);

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Create a new category (Admin only)
 *     tags: [Categories]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - category_name
 *             properties:
 *               category_name:
 *                 type: string
 *                 example: Shoes
 *               description:
 *                 type: string
 *                 example: All kinds of shoes
 *     responses:
 *       201:
 *         description: Category created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized - No token provided
 *       403:
 *         description: Forbidden - Admin access required
 *       409:
 *         description: Category already exists
 */
router.post(
  "/",
  authenticate,
  authorizeRoles(1),
  createCategory
);

export default router;