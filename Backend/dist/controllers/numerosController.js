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
exports.deleteNumero = exports.putNumero = exports.postNumero = exports.getNumero = exports.getNumeros = void 0;
const numeroModel_1 = require("../models/numeroModel");
const getNumeros = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // TODO: Implementar paginación
    try {
        const numeros = yield numeroModel_1.numero.find({ estado: true });
        res.json({
            numeros,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error interno, comuníquese con el administrador",
        });
    }
});
exports.getNumeros = getNumeros;
const getNumero = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Obtener el parámetro id de la consulta
    const { id } = req.params;
    try {
        const num = yield numeroModel_1.numero.findById(id);
        res.json({
            num,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error interno, comuníquese con el administrador",
        });
    }
});
exports.getNumero = getNumero;
const postNumero = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { num } = req.body;
    try {
        // Busqueda del número para ver si existe ya.
        const numeroExistente = yield numeroModel_1.numero.findOne({ num });
        if (numeroExistente) {
            return res.status(400).json({
                msg: `El numero ${num} ya existe.`,
            });
        }
        // Creacion del objeto a insertar en BD
        const number = new numeroModel_1.numero({
            num: num,
        });
        // Inserción en la BD
        yield number.save();
        res.json({
            msg: "Numero creado exitosamente",
            numero: number,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error interno, comuníquese con el administrador",
        });
    }
});
exports.postNumero = postNumero;
const putNumero = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // TODO: Cambiar estado a false.
});
exports.putNumero = putNumero;
const deleteNumero = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //TODO: Cambiar estado a...?,
});
exports.deleteNumero = deleteNumero;
