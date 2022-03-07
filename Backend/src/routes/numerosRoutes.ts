import { Router } from "express";
import { check } from "express-validator";
import {
  deleteNumero,
  getNumero,
  getNumeros,
  postNumero,
  putNumero,
} from "../controllers/numerosController";

const router = Router();

router.get("/", getNumeros);    //TODO: Validaciones
router.get("/:id", getNumero);  //TODO: Validaciones
router.post("/", postNumero);   //TODO: Validaciones
router.put("/:id", putNumero);  //TODO: Validaciones
router.delete("/:id", deleteNumero); //TODO: Validaciones

export default router;
