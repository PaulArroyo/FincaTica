"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../database/database");
const Usuario = database_1.dbPostgres.define("usuario", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    usuario: {
        type: sequelize_1.DataTypes.STRING,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
    },
    apellidoPaterno: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    apellidoMaterno: {
        type: sequelize_1.DataTypes.STRING,
    },
    correo: {
        type: sequelize_1.DataTypes.STRING,
    },
    estado: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    rolId: {
        type: sequelize_1.DataTypes.INTEGER,
    },
});
exports.default = Usuario;
