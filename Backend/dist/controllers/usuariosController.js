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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const usuarioModel_1 = require("../models/usuarioModel");
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // TODO: Implementar paginación
    try {
        const usuarios = yield usuarioModel_1.usuario.find({ estado: true });
        res.json({
            usuarios,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error interno, comuníquese con el administrador",
        });
    }
});
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Obtener el parámetro id de la consulta
    const { id } = req.params;
    try {
        const user = yield usuarioModel_1.usuario.findById(id);
        res.json({
            usuario: user,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error interno, comuníquese con el administrador",
        });
    }
});
exports.getUsuario = getUsuario;
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Se reciben los argumentos del cuerpo del post
    const { nombre, apellidoPaterno, apellidoMaterno, password, correo, rol } = req.body;
    // Creación del objeto a insertar en BD
    const user = new usuarioModel_1.usuario({
        nombre: nombre.toLowerCase(),
        apellidoPaterno: apellidoPaterno.toLowerCase(),
        apellidoMaterno: apellidoMaterno.toLowerCase(),
        password,
        correo: correo.toLowerCase(),
        rol,
    });
    // Encriptación de la contraseña
    const salt = bcryptjs_1.default.genSaltSync();
    user.password = bcryptjs_1.default.hashSync(password, salt);
    // Inserción en la BD
    try {
        yield user.save();
        res.json({
            msg: "Usuario creado exitosamente",
            usuario: user,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error interno, comuníquese con el administrador",
        });
    }
});
exports.postUsuario = postUsuario;
const putUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const _a = req.body, { _id, rol } = _a, data = __rest(_a, ["_id", "rol"]);
    // Busqueda de
});
exports.putUsuario = putUsuario;
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
exports.deleteUsuario = deleteUsuario;
