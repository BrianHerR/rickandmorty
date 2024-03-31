import React from "react";
import { Link } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";

function Navbar({ onSearch }) {
  return (
    <div>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <Link to="/about">
        <button>About</button>
      </Link>

      <Link to="/favorites">
        <button>Favorites</button>
      </Link>

      <Searchbar onSearch={onSearch} />
    </div>
  );
}

export default Navbar;
