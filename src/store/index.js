import { configureStore } from "@reduxjs/toolkit";
import CharacterReducer from "./CharacterSlice"
const store = configureStore({
  reducer: {
    characters: CharacterReducer
  }
});

export default store;
