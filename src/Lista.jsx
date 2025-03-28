// src/MostrarLista.js
import { useState } from "react";

function MostrarLista() {
  const [nombres, setNombres] = useState([
    "Ana",
    "Luis",
    "Carlos",
    "Daniel",
    "Gabriel",
  ]);

  const eliminarUltimo = () => {
    setNombres(nombres.slice(0, -1));
  };

  return (
    <div>
      <h3>Lista de Nombres:</h3>
      <ul>
        {nombres.map((nombre, index) => (
          <li key={index}>{nombre}</li>
        ))}
      </ul>
      <button onClick={eliminarUltimo}>Eliminar Último</button>
    </div>
  );
}

export default MostrarLista;
