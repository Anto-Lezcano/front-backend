import "./assets/App.css";
import { validarUsu, obtenerSaludo } from "./api/validarUsuApi";
import { useEffect, useState } from "react";

function App() {
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [nombreValido, setNombreValido] = useState(false);

  useEffect(() => {
    const obtenerMsj = async () => {
      if (nombreValido) {
        try {
          const res = await obtenerSaludo(nombre);
          console.log("Respuesta del saludo:", res);
          setMensaje(res.message);
        } catch (error) {
          setMensaje("Error al obtener el saludo");
          console.error(error);
        } finally {
          setNombreValido(false);
        }
      }
    };

    obtenerMsj();
  }, [nombreValido]);

  const validarClick = async () => {
    if (!nombre.trim()) {
      setMensaje("Debes ingresar un nombre");
      return;
    }

    try {
      const res = await validarUsu(nombre);
      if (res.valido) {
        setNombreValido(true);
      } else {
        setMensaje("El nombre no está en la lista");
        setNombreValido(false);
      }
    } catch (error) {
      setMensaje("Error al validar el nombre");
    }
  };

  return (
    <div id="contenedor">
      <h1>Valida si tu nombre está en la lista</h1>
      <label>Ingresa tu nombre</label>
      <input
        type="text"
        id="nombre"
        value={nombre}
        placeholder="Ej: Maria"
        onChange={(e) => setNombre(e.target.value)}
      />
      <button id="boton" onClick={validarClick}>
        Enviar
      </button>
      <p id="saludo">{mensaje}</p>
    </div>
  );
}

export default App;
