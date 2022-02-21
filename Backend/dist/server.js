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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const usuariosRoutes_1 = __importDefault(require("./routes/usuariosRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const database_1 = require("./database/database");
class Server {
    constructor() {
        this.apiPaths = {
            usuarios: "/api/usuarios",
            auth: "/api/auth",
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "3000";
        // Conexion a BD
        this.conexionBD();
        // Middlewares
        this.middlewares();
        // Llamo las rutas
        this.routes();
    }
    conexionBD() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, database_1.dbMongoConnection)();
        });
    }
    middlewares() {
        // CORS -> permite hacer peticiones cross domain
        this.app.use((0, cors_1.default)());
        // JSON -> lectura y parseo de json
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use(this.apiPaths.auth, authRoutes_1.default);
        this.app.use(this.apiPaths.usuarios, usuariosRoutes_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running in port: ${this.port}`);
        });
    }
}
exports.default = Server;
