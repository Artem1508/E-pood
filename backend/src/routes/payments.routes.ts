import {Router} from "express";
import { authenticate } from "../middleware/auth.middleware";
import { authorizeRoles } from "../middleware/role.middleware";
import { createPayment, getPayments } from "../controllers/payments.controller";

const router = Router();

/**
 * @swagger
 * /payments:
 *   post:
 *     summary: Create a new payment for an order
 *     tags: [Payments]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - order_id
 *               - payment_method
 *               - amount
 *             properties:
 *               order_id:
 *                 type: integer
 *                 example: 1001
 *                 description: ID of the order to pay for
 *               payment_method:
 *                 type: string
 *                 enum: [card, paypal, bank_transfer]
 *                 example: card
 *                 description: Payment method
 *               amount:
 *                 type: number
 *                 example: 180.00
 *                 description: Amount to pay
 *               card_number:
 *                 type: string
 *                 example: "**** **** **** 1234"
 *                 description: Last 4 digits of card (if card payment)
 *               transaction_id:
 *                 type: string
 *                 example: "TXN_123456789"
 *                 description: External transaction ID
 *     responses:
 *       201:
 *         description: Payment created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 payment_id:
 *                   type: integer
 *                   example: 5001
 *                 order_id:
 *                   type: integer
 *                   example: 1001
 *                 amount:
 *                   type: number
 *                   example: 180.00
 *                 status:
 *                   type: string
 *                   enum: [pending, completed, failed, refunded]
 *                   example: completed
 *                 payment_method:
 *                   type: string
 *                   example: card
 *                 message:
 *                   type: string
 *                   example: Payment processed successfully
 *       400:
 *         description: Invalid input or payment already processed
 *       401:
 *         description: Unauthorized - Please login
 *       403:
 *         description: Forbidden - Customer access required
 *       404:
 *         description: Order not found
 */
router.post(
  "/",
  authenticate,
  authorizeRoles(3),
  createPayment
);

/**
 * @swagger
 * /payments/my-payments:
 *   get:
 *     summary: Get current user's payment history
 *     tags: [Payments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [pending, completed, failed, refunded]
 *         description: Filter payments by status
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           example: 10
 *         description: Number of payments to return
 *       - in: query
 *         name: offset
 *         schema:
 *           type: integer
 *           example: 0
 *         description: Number of payments to skip (for pagination)
 *     responses:
 *       200:
 *         description: List of user's payments
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 payments:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Payment'
 *                 total:
 *                   type: integer
 *                   example: 5
 *                 page:
 *                   type: integer
 *                   example: 1
 *       401:
 *         description: Unauthorized - Please login
 *       403:
 *         description: Forbidden - Customer access required
 */
router.get(
  "/my-payments",
  authenticate,
  authorizeRoles(3),
  getPayments
);

export default router;