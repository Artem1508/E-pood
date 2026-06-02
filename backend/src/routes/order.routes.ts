import { Router } from "express";
import { authenticate } from "../middleware/auth.middleware";
import { authorizeRoles } from "../middleware/role.middleware";
import { createOrder, getMyOrders } from "../controllers/order.controller";

const router = Router();

router.post(
  "/",
  authenticate,
  authorizeRoles(3),
  createOrder
);

router.get(
  "/my-orders",
  authenticate,
  authorizeRoles(3),
  getMyOrders
);

export default router;