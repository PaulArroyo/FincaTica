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
exports.numero = void 0;
const mongoose_1 = require("mongoose");
const numeroSchema = new mongoose_1.Schema({
    num: { type: Number, required: true, unique: true },
    estado: { type: Boolean, default: true },
});
// Sobrescribo este metodo para controlar lo que quiero devolver como respuesta.
numeroSchema.methods.toJSON = function () {
    const _a = this.toObject(), { __v } = _a, numero = __rest(_a, ["__v"]);
    return numero;
};
exports.numero = (0, mongoose_1.model)("Numero", numeroSchema);
