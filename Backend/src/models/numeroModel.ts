import { model, Schema } from "mongoose";

interface NumeroInterface {
  num: number;
  estado: boolean;
}

const numeroSchema = new Schema<NumeroInterface>({
  num: { type: Number, required: true, unique: true },
  estado: { type: Boolean, default: true },
});

// Sobrescribo este metodo para controlar lo que quiero devolver como respuesta.
numeroSchema.methods.toJSON = function () {
  const { __v, ...numero } = this.toObject();
  return numero;
};

export const numero = model<NumeroInterface>("Numero", numeroSchema);
