// src/ValidarNumero.js
import { useState } from "react";

function ValidarNumero() {
  const [numero, setNumero] = useState("");
  const [esMayor, setEsMayor] = useState(null);

  const validarNumero = () => {
    setEsMayor(parseInt(numero) > 10);
  };

  return (
    <div>
      <input
        type="number"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
      />
      <button onClick={validarNumero}>Mirar si es mayor a 10</button>
      {esMayor !== null && (
        <p>{esMayor ? "El número es mayor a 10" : "El número no es mayor a 10"}</p>
      )}
    </div>
  );
}

export default ValidarNumero;
