import { Router } from "express";
import { check } from "express-validator";
import {
  deleteColor,
  getColores,
  postColor,
} from "../controllers/coloresController";

const router = Router();

router.get("/", getColores); //TODO: Validaciones
router.post("/", postColor); //TODO: Validaciones
router.delete("/:id", deleteColor); //TODO: Validaciones

export default router;
