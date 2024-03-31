import React from "react";
import Card from "../Card/Card";

function Home({ characters, onClose }) {
  return (
    <div>
      {characters?.map((character) => (
        <Card
          key={character.id}
          id={character.id}
          name={character.name}
          status={character.status}
          origin={character.origin}
          species={character.species}
          gender={character.gender}
          image={character.image}
          onClose={onClose}
        />
      ))}
    </div>
  );
}

export default Home;
