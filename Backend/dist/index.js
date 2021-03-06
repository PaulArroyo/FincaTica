"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const server_1 = __importDefault(require("./server"));
// Dotenv para poder hacer uso de las variables de entorno
dotenv_1.default.config();
// Instancia del server
const server = new server_1.default();
server.listen();
