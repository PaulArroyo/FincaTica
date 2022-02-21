"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuariosController_1 = require("../controllers/usuariosController");
const router = (0, express_1.Router)();
router.get("/", usuariosController_1.getUsuarios); //TODO: Validaciones
router.get("/:id", usuariosController_1.getUsuario); //TODO: Validaciones
router.post("/", usuariosController_1.postUsuario); //TODO: Validaciones
router.put("/:id", usuariosController_1.putUsuario); //TODO: Validaciones
router.delete("/:id", usuariosController_1.deleteUsuario); //TODO: Validaciones
exports.default = router;
