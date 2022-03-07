"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const animalesController_1 = require("../controllers/animalesController");
const router = (0, express_1.Router)();
router.get("/", animalesController_1.getAnimales); //TODO: Validaciones
router.get("/:id", animalesController_1.getAnimal); //TODO: Validaciones
router.post("/", animalesController_1.postAnimal); //TODO: Validaciones
//router.put("/:id"); //TODO: Validaciones
//router.delete("/:id"); //TODO: Validaciones
exports.default = router;
