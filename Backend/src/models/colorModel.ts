import { model, Schema } from "mongoose";

interface ColorInterface {
  nombre: string;
  estado: boolean;
}

const colorSchema = new Schema<ColorInterface>({
  nombre: { type: String, required: true, unique: true },
  estado: { type: Boolean, default: true },
});

// Sobrescribo este metodo para controlar lo que quiero devolver como respuesta.
colorSchema.methods.toJSON = function () {
  const { __v, ...color } = this.toObject();
  return color;
};

export const color = model<ColorInterface>("Color", colorSchema);
