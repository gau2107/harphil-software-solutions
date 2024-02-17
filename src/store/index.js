import { configureStore } from "@reduxjs/toolkit";
import CharacterReducer from "./CharacterSlice"
const store = configureStore({
  reducer: {
    counter: CharacterReducer
  }
});

export default store;
