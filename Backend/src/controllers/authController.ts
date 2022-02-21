import { request, response } from "express";
import bcrypt from "bcryptjs";

import { usuario } from "../models/usuarioModel";
import generarJWT from "../helpers/generar-jwt";

export const login = async (req = request, res = response) => {
  const { correo, password } = req.body;

  try {
    // Verificar si el usuario existe
    const user = await usuario.findOne({ correo });

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
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(404).json({
        msg: "Usuario y / o contraseña incorrectos",
      });
    }

    // Generar JWT
    const token = await generarJWT(user.id);
    res.json({
      usuario: user,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error interno, comuníquese con el administrador",
    });
  }
};
