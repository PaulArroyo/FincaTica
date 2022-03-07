"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteColor = exports.postColor = exports.getColores = void 0;
const colorModel_1 = require("../models/colorModel");
const getColores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // TODO: Paginación
    try {
        const colores = yield colorModel_1.color.find({ estado: true });
        res.json({
            colores,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error interno, comuníquese con el administrador",
        });
    }
});
exports.getColores = getColores;
const postColor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre } = req.body;
    try {
        // Busqueda del color para ver si existe ya.
        const colorExistente = yield colorModel_1.color.findOne({
            nombre: nombre.toLowerCase(),
        });
        if (colorExistente) {
            return res.status(400).json({
                msg: `El color ${nombre} ya existe.`,
            });
        }
        // Creacion del objeto a insertar en BD
        const color = new colorModel_1.color({
            nombre: nombre.toLowerCase(),
        });
        // Inserción en la BD
        yield color.save();
        res.json({
            msg: "Color creado exitosamente",
            color,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error interno, comuníquese con el administrador",
        });
    }
});
exports.postColor = postColor;
const deleteColor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({
        msg: "Falta implementar",
    });
});
exports.deleteColor = deleteColor;
