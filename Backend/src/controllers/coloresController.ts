import { Request, Response } from "express";

import { color as colorModel } from "../models/colorModel";

export const getColores = async (req: Request, res: Response) => {
  // TODO: Paginación
  try {
    const colores = await colorModel.find({ estado: true });

    res.json({
      colores,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error interno, comuníquese con el administrador",
    });
  }
};

export const postColor = async (req: Request, res: Response) => {
  const { nombre } = req.body;

  try {
    // Busqueda del color para ver si existe ya.
    const colorExistente = await colorModel.findOne({
      nombre: nombre.toLowerCase(),
    });
    if (colorExistente) {
      return res.status(400).json({
        msg: `El color ${nombre} ya existe.`,
      });
    }
    // Creacion del objeto a insertar en BD
    const color = new colorModel({
      nombre: nombre.toLowerCase(),
    });
    // Inserción en la BD
    await color.save();
    res.json({
      msg: "Color creado exitosamente",
      color,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error interno, comuníquese con el administrador",
    });
  }
};

export const deleteColor = async (req: Request, res: Response) => {
  res.json({
    msg: "Falta implementar",
  });
};
