import { Router } from "express";
import { authenticate } from "../middleware/auth.middleware";
import { authorizeRoles } from "../middleware/role.middleware";
import { createOrder, getMyOrders } from "../controllers/order.controller";

const router = Router();

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Create a new order
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - items
 *               - shipping_address
 *             properties:
 *               items:
 *                 type: array
 *                 description: Array of products in the order
 *                 items:
 *                   type: object
 *                   required:
 *                     - product_id
 *                     - quantity
 *                   properties:
 *                     product_id:
 *                       type: integer
 *                       example: 1
 *                     quantity:
 *                       type: integer
 *                       example: 2
 *               shipping_address:
 *                 type: string
 *                 example: Tallinn, Estonia, 10145
 *               notes:
 *                 type: string
 *                 example: Leave at the door
 *     responses:
 *       201:
 *         description: Order created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 order_id:
 *                   type: integer
 *                   example: 1001
 *                 message:
 *                   type: string
 *                   example: Order created successfully
 *       400:
 *         description: Invalid input or empty cart
 *       401:
 *         description: Unauthorized - Please login
 *       403:
 *         description: Forbidden - Customer access required
 */
router.post(
  "/",
  authenticate,
  authorizeRoles(3),
  createOrder
);

/**
 * @swagger
 * /orders/my-orders:
 *   get:
 *     summary: Get current user's orders
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [pending, processing, shipped, delivered, cancelled]
 *         description: Filter orders by status
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           example: 10
 *         description: Number of orders to return
 *       - in: query
 *         name: offset
 *         schema:
 *           type: integer
 *           example: 0
 *         description: Number of orders to skip (for pagination)
 *     responses:
 *       200:
 *         description: List of user's orders
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 orders:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Order'
 *                 total:
 *                   type: integer
 *                 page:
 *                   type: integer
 *       401:
 *         description: Unauthorized - Please login
 *       403:
 *         description: Forbidden - Customer access required
 */
router.get(
  "/my-orders",
  authenticate,
  authorizeRoles(3),
  getMyOrders
);

export default router;