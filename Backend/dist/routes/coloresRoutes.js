"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const coloresController_1 = require("../controllers/coloresController");
const router = (0, express_1.Router)();
router.get("/", coloresController_1.getColores); //TODO: Validaciones
router.post("/", coloresController_1.postColor); //TODO: Validaciones
router.delete("/:id", coloresController_1.deleteColor); //TODO: Validaciones
exports.default = router;
