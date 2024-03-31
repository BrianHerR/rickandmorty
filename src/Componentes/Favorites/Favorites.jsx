import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { order, filter } from "../../features/characters/charactersSlice";

function Favorites({ onClose }) {
  const [aux, setAux] = useState(false);

  const myFavorites = useSelector((state) => state.characters.myFavorites);
  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(order(event.target.value));
    setAux(!aux);
  };

  const handleFilter = (event) => {
    dispatch(filter(event.target.value));
  };

  return (
    <div>
      <div>
        <div>
          <select onChange={handleOrder}>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
          </select>
        </div>
        <div>
          <select onChange={handleFilter}>
            <option value="ALL">Todos</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="Unknown">Unknown</option>
          </select>
        </div>
      </div>
      <div>
        {myFavorites?.map((favorite) => {
          return (
            <Card
              key={favorite.id}
              id={favorite.id}
              name={favorite.name}
              status={favorite.status}
              origin={favorite.origin}
              species={favorite.species}
              gender={favorite.gender}
              image={favorite.image}
              onClose={onClose}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Favorites;
