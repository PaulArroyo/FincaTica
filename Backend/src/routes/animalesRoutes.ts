import { Router } from "express";
import { check } from "express-validator";
import {
  getAnimal,
  getAnimales,
  postAnimal,
} from "../controllers/animalesController";

const router = Router();

router.get("/", getAnimales); //TODO: Validaciones
router.get("/:id", getAnimal); //TODO: Validaciones
router.post("/", postAnimal); //TODO: Validaciones
//router.put("/:id"); //TODO: Validaciones
//router.delete("/:id"); //TODO: Validaciones

export default router;
