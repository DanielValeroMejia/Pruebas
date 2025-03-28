
import { useState } from "react";

function FondoColor() {
  const [colorFondo, setColorFondo] = useState("white");

  const cambiarColorFondo = () => {
    const colores = ["#FF5733", "#33FF57", "#3357FF", "#FF33A8"];
    setColorFondo(colores[Math.floor(Math.random() * colores.length)]);
  };

  return (
    <div style={{ height: "100vh", backgroundColor: colorFondo }}>
      <button onClick={cambiarColorFondo}>Cambiar color de fondo</button>
    </div>
  );
}

export default FondoColor;
