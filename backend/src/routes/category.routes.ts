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

router.get("/", getCategories);

router.post(
  "/",
  authenticate,
  authorizeRoles(1),
  createCategory
);

export default router;