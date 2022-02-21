import { request, response } from "express";
import bcrypt from "bcryptjs";

import { userModel } from "../models/usuario";
import generarJWT from "../helpers/generar-jwt";

export const login = async (req = request, res = response) => {
  const { correo, password } = req.body;

  try {
    // Verificar si el usuario existe
    const usuario = await userModel.findOne({ correo });

    if (!usuario) {
      return res.status(404).json({
        msg: "Usuario y / o contraseña incorrectos",
      });
    }

    // Verificar si el usuario está activo
    if (!usuario.estado) {
      return res.status(404).json({
        msg: "Usuario y / o contraseña incorrectos",
      });
    }

    // Verificar la contraseña
    const validPassword = bcrypt.compareSync(password, usuario.password);
    if (!validPassword) {
      return res.status(404).json({
        msg: "Usuario y / o contraseña incorrectos",
      });
    }

    // Generar JWT
    const token = await generarJWT(usuario.id);
    res.json({
      usuario,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error interno, comuníquese con el administrador",
    });
  }
};
