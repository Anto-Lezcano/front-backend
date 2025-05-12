import express from "express";
import cors from "cors";
import { usuariosRegistrados } from "./db/lista_personas.js";
const app = express();

app.use(cors());

app.get("/validar/:nombre", (req, res) => {
  const nombre = req.params.nombre;
  if (usuariosRegistrados.includes(nombre.toLocaleLowerCase())) {
    res.send({ valido: true });
  } else {
    res.send({ valido: false });
  }
});

app.get("/saludo/:nombre", (req, res) => {
  const nombre = req.params.nombre;
  res.send({ message: `Bienvenido, ${nombre}!` });
});

app.listen(3000, () => {
  console.log("El servidor esta corriendo en el puerto 3000");
});
