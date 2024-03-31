import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import { removeFav, addFav } from "../../features/characters/charactersSlice";

function Card(props) {
  const location = useLocation();

  const { onClose, id, origin, name, status, species, gender, image } = props;

  const characters = useSelector((state) => state.characters.characters);

  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.characters.myFavorites);

  const isFav = favorites.some((fav) => fav.id === id);

  const handleFavorite = () => {
    if (isFav) {
      dispatch(removeFav(id));
    } else {
      dispatch(addFav(props));
    }
  };

  useEffect(() => {
    characters.forEach((fav) => {
      if (fav.id === id.toString()) {
        setIsfav(true);
      }
    });
  }, [characters]);
  return (
    <div>
      <div>
        <button onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>
        {location.pathname !== "/favorites" && <button onClick={() => onClose(id)}>x</button>}
      </div>

      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link>

      <h2>{status}</h2>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <h3>{origin.name}</h3>
      <p>id: {id}</p>
      <div>
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default Card;
