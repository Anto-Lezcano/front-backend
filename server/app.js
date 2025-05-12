import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/saludo/:nombre", (req, res) => {
  return res.send(`Hola ${req.params.nombre}`);
});

app.listen(3000, () => {
  console.log("El servidor esta corriendo en el puerto 3000");
});
