import dotenv from "dotenv";
import Server from "./server";

// Dotenv para poder hacer uso de las variables de entorno
dotenv.config();

// Instancia del server
const server = new Server();
server.listen();
