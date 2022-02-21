import { Request, Response } from "express";
import bcrypt from "bcryptjs";

import { userModel } from "../models/usuario";

export const getUsuarios = async (req: Request, res: Response) => {
  // TODO: Implementar paginación
  try {
    const usuarios = await userModel.find({ estado: true });

    res.json({
      usuarios,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error interno, comuníquese con el administrador",
    });
  }
};

export const getUsuario = async (req: Request, res: Response) => {
  // Obtener el parámetro id de la consulta
  const { id } = req.params;

  try {
    const usuario = await userModel.findById(id);

    res.json({
      usuario,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error interno, comuníquese con el administrador",
    });
  }
};

export const postUsuario = async (req: Request, res: Response) => {
  // Se reciben los argumentos del cuerpo del post
  const {
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    user,
    password,
    correo,
    rol,
  } = req.body;

  // Creación del objeto a insertar en BD
  const usuario = new userModel({
    nombre: nombre.toLowerCase(),
    apellidoPaterno: apellidoPaterno.toLowerCase(),
    apellidoMaterno: apellidoMaterno.toLowerCase(),
    user,
    password,
    correo: correo.toLowerCase(),
    rol,
  });

  // Encriptación de la contraseña
  const salt = bcrypt.genSaltSync();
  usuario.password = bcrypt.hashSync(password, salt);

  // Inserción en la BD
  try {
    await usuario.save();
    res.json({
      msg: "Usuario creado exitosamente",
      usuario,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error interno, comuníquese con el administrador",
    });
  }
};

export const putUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { _id, rol, ...data } = req.body;

  // Busqueda de
};

export const deleteUsuario = async (req: Request, res: Response) => {};
