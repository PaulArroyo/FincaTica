import { Router } from "express";
import { check } from "express-validator";

import { login } from "../controllers/authController";

const router = Router();

router.post("/", login);

export default router;
