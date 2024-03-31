import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div>
      <h1>Rick and Morty</h1>
      <Link to="/home">
        <button>Iniciar</button>
      </Link>
    </div>
  );
}

export default Welcome;
