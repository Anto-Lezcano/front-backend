import express from "express";

const app = express();

app.get("/saludo/:nombre", (req, res) => {
  return res.send(`Hola${req.params.nombre}`);
});

app.listen(3000, () => {
  console.log("El servidor esta corriendo en el puerto 3000");
});
