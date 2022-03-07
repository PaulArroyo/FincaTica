import { Request, Response } from "express";

import { animal as animalModel } from "../models/animalModel";

export const getAnimales = async (req: Request, res: Response) => {
  // TODO: Implementar paginación
  try {
    const animales = await animalModel
      .find({ estado: true })
      .populate("numero", "num")
      .populate("color", "nombre");

    res.json({
      animales,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error interno, comuníquese con el administrador",
    });
  }
};

export const getAnimal = async (req: Request, res: Response) => {
  // Obtener el parámetro id de la consulta
  const { id } = req.params;
  try {
    const animal = await animalModel
      .findById(id)
      .populate("numero", "num")
      .populate("color", "nombre");
    res.json({
      animal,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error interno, comuníquese con el administrador",
    });
  }
};

export const postAnimal = async (req: Request, res: Response) => {
  const {
    numero,
    color,
    genero,
    fecha_entrada,
    peso_entrada,
    precio_entrada,
    fecha_salida,
    peso_salida,
    precio_salida,
    estado,
  } = req.body;

  try {
    // Creacion del objeto a insertar en BD
    const animal = new animalModel({
      numero,
      color,
      genero,
      fecha_entrada,
      peso_entrada,
      precio_entrada,
      fecha_salida,
      peso_salida,
      precio_salida,
      estado,
    });

    // Inserción en la BD
    await animal.save();
    res.json({
      msg: "Animal creado exitosamente",
      animal,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error interno, comuníquese con el administrador",
    });
  }
};
