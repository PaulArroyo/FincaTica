import jwt from "jsonwebtoken";

const generarJWT = (uid: string) => {
  return new Promise((resolve, reject) => {
    const payload = { uid };

    jwt.sign(
      payload,
      process.env.SECRETORPRIVATEKEY || "",
      {
        expiresIn: "1h",
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject("Error al generar el token");
        } else {
          resolve(token);
        }
      }
    );
  });
};

export default generarJWT;
