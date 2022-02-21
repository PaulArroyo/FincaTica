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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const express_1 = require("express");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const usuarioModel_1 = require("../models/usuarioModel");
const generar_jwt_1 = __importDefault(require("../helpers/generar-jwt"));
const login = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    const { correo, password } = req.body;
    try {
        // Verificar si el usuario existe
        const user = yield usuarioModel_1.usuario.findOne({ correo });
        if (!user) {
            return res.status(404).json({
                msg: "Usuario y / o contraseña incorrectos",
            });
        }
        // Verificar si el usuario está activo
        if (!user.estado) {
            return res.status(404).json({
                msg: "Usuario y / o contraseña incorrectos",
            });
        }
        // Verificar la contraseña
        const validPassword = bcryptjs_1.default.compareSync(password, user.password);
        if (!validPassword) {
            return res.status(404).json({
                msg: "Usuario y / o contraseña incorrectos",
            });
        }
        // Generar JWT
        const token = yield (0, generar_jwt_1.default)(user.id);
        res.json({
            usuario: user,
            token,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error interno, comuníquese con el administrador",
        });
    }
});
exports.login = login;
