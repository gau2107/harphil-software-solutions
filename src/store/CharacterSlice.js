import { createSlice } from "@reduxjs/toolkit";

const characterSlice = createSlice({
  name: 'characters',
  initialState: {
    list: [],
    selectedCharacter: {}
  },
  reducers: {
    insert: (state, action) => {
      state.list = [...action.payload];
    },
    getSingleCharacter: (state, action) => {
      let foundCharacter = state.list.find(character => parseInt(action.payload) === character.id);
      state.selectedCharacter = foundCharacter || {};
    }
  }
});

export const { insert, getSingleCharacter } = characterSlice.actions;
export default characterSlice.reducer;