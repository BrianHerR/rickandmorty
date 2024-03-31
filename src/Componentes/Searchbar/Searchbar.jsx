import React, { useState } from "react";

function Searchbar({ onSearch }) {
  const [character, setCharacter] = useState("");

  const handleChange = (event) => {
    setCharacter(event.target.value);
  };
  return (
    <div>
      <input type="search" onChange={handleChange} value={character} />

      <button
        onClick={() => {
          onSearch(character);
        }}
      >
        Agregar
      </button>
    </div>
  );
}

export default Searchbar;
