import { Request, Response } from "express";

import { numero } from "../models/numeroModel";

export const getNumeros = async (req: Request, res: Response) => {
  // TODO: Implementar paginación
  try {
    const numeros = await numero.find({ estado: true });

    res.json({
      numeros,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error interno, comuníquese con el administrador",
    });
  }
};

export const getNumero = async (req: Request, res: Response) => {
  // Obtener el parámetro id de la consulta
  const { id } = req.params;
  try {
    const num = await numero.findById(id);
    res.json({
      num,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error interno, comuníquese con el administrador",
    });
  }
};

export const postNumero = async (req: Request, res: Response) => {
  const { num } = req.body;

  try {
    // Busqueda del número para ver si existe ya.
    const numeroExistente = await numero.findOne({ num });
    if (numeroExistente) {
      return res.status(400).json({
        msg: `El numero ${num} ya existe.`,
      });
    }
    // Creacion del objeto a insertar en BD
    const number = new numero({
      num: num,
    });
    // Inserción en la BD
    await number.save();
    res.json({
      msg: "Numero creado exitosamente",
      numero: number,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error interno, comuníquese con el administrador",
    });
  }
};

export const putNumero = async (req: Request, res: Response) => {
  // TODO: Cambiar estado a false.
};

export const deleteNumero = async (req: Request, res: Response) => {
  //TODO: Cambiar estado a...?,
};
