"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.animal = void 0;
const mongoose_1 = require("mongoose");
const animalSchema = new mongoose_1.Schema({
    numero: { type: mongoose_1.Schema.Types.ObjectId, ref: "Numero", required: true },
    color: { type: mongoose_1.Schema.Types.ObjectId, ref: "Color", required: true },
    genero: { type: String, required: true, enum: ["macho", "hembra"] },
    fecha_entrada: { type: String, required: true },
    peso_entrada: { type: String, required: true },
    precio_entrada: { type: String, required: true },
    fecha_salida: { type: String, default: "Sin fecha registrada" },
    peso_salida: { type: String, default: "Sin peso registrado" },
    precio_salida: { type: String, default: "Sin precio registrado" },
    estado: { type: Boolean, default: true },
});
// Sobrescribo este metodo para controlar lo que quiero devolver como respuesta.
animalSchema.methods.toJSON = function () {
    const _a = this.toObject(), { __v } = _a, animal = __rest(_a, ["__v"]);
    return animal;
};
exports.animal = (0, mongoose_1.model)("Animal", animalSchema);
