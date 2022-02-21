import { model, Schema } from "mongoose";

interface UsuarioInterface {
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  password: string;
  correo: string;
  rol: string;
  estado: boolean;
}

const usuarioSchema = new Schema<UsuarioInterface>({
  nombre: { type: String, required: true },
  apellidoPaterno: { type: String },
  apellidoMaterno: { type: String },
  password: { type: String, required: [true, "La contraseña es obligatoria"] },
  correo: {
    type: String,
    required: [true, "El correo es obligatorio"],
    unique: true,
  },
  rol: { type: String, required: true, enum: ["ADMIN_ROL", "USER_ROL"] },
  estado: { type: Boolean, default: true },
});

export const usuario = model<UsuarioInterface>("Usuario", usuarioSchema);
