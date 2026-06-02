import {Router} from "express";
import { authenticate } from "../middleware/auth.middleware";
import { authorizeRoles } from "../middleware/role.middleware";
import { createPayment, getPayments } from "../controllers/payments.controller";

const router = Router();
router.post(
  "/",
  authenticate,
  authorizeRoles(3),
  createPayment
);
router.get(
  "/my-payments",
  authenticate,
  authorizeRoles(3),
  getPayments
);
export default router;
