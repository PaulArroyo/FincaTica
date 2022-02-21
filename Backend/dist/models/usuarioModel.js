"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuario = void 0;
const mongoose_1 = require("mongoose");
const usuarioSchema = new mongoose_1.Schema({
    nombre: { type: String, required: true },
    apellidoPaterno: { type: String },
    apellidoMaterno: { type: String },
    password: { type: String, required: [true, "La contraseña es obligatoria"] },
    correo: {
        type: String,
        required: [true, "El correo es obligatorio"],
        unique: true,
    },
    rol: { type: String, required: true, enum: ["ADMIN_ROL", "USER_ROL"] },
    estado: { type: Boolean, default: true },
});
exports.usuario = (0, mongoose_1.model)("Usuario", usuarioSchema);
