"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const numerosController_1 = require("../controllers/numerosController");
const router = (0, express_1.Router)();
router.get("/", numerosController_1.getNumeros); //TODO: Validaciones
router.get("/:id", numerosController_1.getNumero); //TODO: Validaciones
router.post("/", numerosController_1.postNumero); //TODO: Validaciones
router.put("/:id", numerosController_1.putNumero); //TODO: Validaciones
router.delete("/:id", numerosController_1.deleteNumero); //TODO: Validaciones
exports.default = router;
