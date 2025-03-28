// src/ModificarTextos.js
import { useState } from "react";

function ModificarTextos() {
  const [textos, setTextos] = useState({
    texto1: "Texto 1",
    texto2: "Texto 2",
    texto3: "Texto 3",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTextos({ ...textos, [name]: value });
  };

  return (
    <div>
      <input
        type="text"
        name="texto1"
        value={textos.texto1}
        onChange={handleChange}
      />
      <input
        type="text"
        name="texto2"
        value={textos.texto2}
        onChange={handleChange}
      />
      <input
        type="text"
        name="texto3"
        value={textos.texto3}
        onChange={handleChange}
      />
      <div>
        <p>{textos.texto1}</p>
        <p>{textos.texto2}</p>
        <p>{textos.texto3}</p>
      </div>
    </div>
  );
}

export default ModificarTextos;
