import express from "express";
import cors from "cors";

import userRoutes from "./routes/usuariosRoutes";
import authRoutes from "./routes/authRoutes";
import numerosRoutes from "./routes/numerosRoutes";
import coloresRoutes from "./routes/coloresRoutes";
import animalesRoutes from "./routes/animalesRoutes";

import { dbMongoConnection } from "./database/database";

class Server {
  private app: express.Application;
  private port: string;

  private apiPaths = {
    usuarios: "/api/usuarios",
    auth: "/api/auth",
    numeros: "/api/numeros",
    colores: "/api/colores",
    animales: "/api/animales",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "3000";

    // Conexion a BD
    this.conexionBD();

    // Middlewares
    this.middlewares();

    // Llamo las rutas
    this.routes();
  }

  async conexionBD() {
    await dbMongoConnection();
  }

  middlewares() {
    // CORS -> permite hacer peticiones cross domain
    this.app.use(cors());

    // JSON -> lectura y parseo de json
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.apiPaths.auth, authRoutes);
    this.app.use(this.apiPaths.usuarios, userRoutes);
    this.app.use(this.apiPaths.numeros, numerosRoutes);
    this.app.use(this.apiPaths.colores, coloresRoutes);
    this.app.use(this.apiPaths.animales, animalesRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running in port: ${this.port}`);
    });
  }
}

export default Server;
