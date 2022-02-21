import mongoose, { ConnectOptions } from "mongoose";

const dbOptions: ConnectOptions = {};

export const dbMongoConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN_Localhost || "");

    console.log("Conexion a Mongo Exitosa!");
  } catch (error) {
    console.log(error);
    throw new Error("Error al intentar conexion a Mongo");
  }
};
