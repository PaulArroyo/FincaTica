import { Router } from "express";
import { check } from "express-validator";

import {
  getUsuario,
  getUsuarios,
  postUsuario,
  putUsuario,
  deleteUsuario,
} from "../controllers/usuariosController";

const router = Router();

router.get("/", getUsuarios);         //TODO: Validaciones
router.get("/:id", getUsuario);       //TODO: Validaciones
router.post("/", postUsuario);        //TODO: Validaciones
router.put("/:id", putUsuario);       //TODO: Validaciones
router.delete("/:id", deleteUsuario); //TODO: Validaciones

export default router;
