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
exports.postAnimal = exports.getAnimal = exports.getAnimales = void 0;
const animalModel_1 = require("../models/animalModel");
const getAnimales = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // TODO: Implementar paginación
    try {
        const animales = yield animalModel_1.animal
            .find({ estado: true })
            .populate("numero", "num")
            .populate("color", "nombre");
        res.json({
            animales,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error interno, comuníquese con el administrador",
        });
    }
});
exports.getAnimales = getAnimales;
const getAnimal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Obtener el parámetro id de la consulta
    const { id } = req.params;
    try {
        const animal = yield animalModel_1.animal
            .findById(id)
            .populate("numero", "num")
            .populate("color", "nombre");
        res.json({
            animal,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error interno, comuníquese con el administrador",
        });
    }
});
exports.getAnimal = getAnimal;
const postAnimal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { numero, color, genero, fecha_entrada, peso_entrada, precio_entrada, fecha_salida, peso_salida, precio_salida, estado, } = req.body;
    try {
        // Creacion del objeto a insertar en BD
        const animal = new animalModel_1.animal({
            numero,
            color,
            genero,
            fecha_entrada,
            peso_entrada,
            precio_entrada,
            fecha_salida,
            peso_salida,
            precio_salida,
            estado,
        });
        // Inserción en la BD
        yield animal.save();
        res.json({
            msg: "Animal creado exitosamente",
            animal,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error interno, comuníquese con el administrador",
        });
    }
});
exports.postAnimal = postAnimal;
