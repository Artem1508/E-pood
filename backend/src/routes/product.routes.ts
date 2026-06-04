import { Router } from "express";
import { authenticate } from "../middleware/auth.middleware";
import { authorizeRoles } from "../middleware/role.middleware";
import { getProducts, getProductById, createProduct } from "../controllers/product.controller";

const router = Router();

router.get("/", getProducts);

router.get("/:id", getProductById)

router.post(
  "/",
  authenticate,
  authorizeRoles(1, 2),
  createProduct
);

export default router;