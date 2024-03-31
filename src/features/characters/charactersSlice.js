import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  characters: [],
  myFavorites: [],
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    addFav: (state, action) => {
      const newCharacters = [...state.characters, action.payload];
      const newFavorites = [...state.myFavorites, action.payload];
      return { ...state, characters: newCharacters, myFavorites: newFavorites };
    },
    removeFav: (state, action) => {
      const newCharacters = state.characters.filter((char) => char.id !== action.payload);
      const newFavorites = state.myFavorites.filter((char) => char.id !== action.payload);
      return { ...state, characters: newCharacters, myFavorites: newFavorites };
    },
    filter: (state, action) => {
      if (action.payload === "All") return { ...state, myFavorites: state.characters };
      const filterAllChar = state.characters.filter((char) => char.gender === action.payload);
      return {
        ...state,
        myFavorites: filterAllChar,
      };
    },
    order: (state, action) => {
      let copyAllChar = [...state.characters];
      copyAllChar.sort((a, b) => {
        if (action.payload === "A") {
          return a.id - b.id;
        } else if (action.payload === "D") {
          return b.id - a.id;
        } else {
          return 0;
        }
      });
      return {
        ...state,
        myFavorites: copyAllChar,
      };
    },
  },
});

export const { addFav, removeFav, filter, order } = charactersSlice.actions;

export default charactersSlice.reducer;
