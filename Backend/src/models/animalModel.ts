import { model, Schema } from "mongoose";

interface AnimalInterface {
  numero: {};
  color: {};
  genero: string;
  fecha_entrada: string;
  peso_entrada: string;
  precio_entrada: string;
  fecha_salida?: string;
  peso_salida?: string;
  precio_salida?: string;
  estado: boolean;
}

const animalSchema = new Schema<AnimalInterface>({
  numero: { type: Schema.Types.ObjectId, ref: "Numero", required: true },
  color: { type: Schema.Types.ObjectId, ref: "Color", required: true },
  genero: { type: String, required: true, enum: ["macho", "hembra"] },
  fecha_entrada: { type: String, required: true },
  peso_entrada: { type: String, required: true },
  precio_entrada: { type: String, required: true },
  fecha_salida: { type: String, default: "Sin fecha registrada" },
  peso_salida: { type: String, default: "Sin peso registrado" },
  precio_salida: { type: String, default: "Sin precio registrado" },
  estado: { type: Boolean, default: true },
});

// Sobrescribo este metodo para controlar lo que quiero devolver como respuesta.
animalSchema.methods.toJSON = function () {
  const { __v, ...animal } = this.toObject();
  return animal;
};

export const animal = model<AnimalInterface>("Animal", animalSchema);
