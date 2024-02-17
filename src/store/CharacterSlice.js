import { createSlice } from "@reduxjs/toolkit";

const characterSlice = createSlice({
  name: 'characters',
  initialState: {
    list: [],
    isError: false,
    selectedCharacter: {}
  },
  reducers: {
    // store list in state
    insert: (state, action) => {
      state.list = [...action.payload];
    },
    // fetch single character from list
    getSingleCharacter: (state, action) => {
      let foundCharacter = state.list.find(character => parseInt(action.payload) === character.id);
      if(!foundCharacter)
        state.isError = true;
      else
        state.selectedCharacter = foundCharacter;
    },
    // if not in list, set single character into selectedCharacterObj
    setSingleCharacter: (state, action) => {
      state.selectedCharacter = action.payload;
      state.isError = false;
    }
  }
});

export const { insert, getSingleCharacter, setSingleCharacter } = characterSlice.actions;
export default characterSlice.reducer;