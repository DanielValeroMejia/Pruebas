// src/MostrarObjeto.js
import { useState } from "react";

function MostrarObjeto() {
  const [mostrar, setMostrar] = useState(false);

  const usuario = {
    nombre: "Juan",
    edad: 25,
  };

  return (
    <div>
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? "Ocultar Datos" : "Mostrar Datos"}
      </button>
      {mostrar && (
        <div>
          <p>Nombre: {usuario.nombre}</p>
          <p>Edad: {usuario.edad}</p>
        </div>
      )}
    </div>
  );
}

export default MostrarObjeto;
