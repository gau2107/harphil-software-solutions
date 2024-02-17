import { createSlice } from "@reduxjs/toolkit";

const characterSlice = createSlice({
  name: 'characters',
  initialState: [],
  reducers: {
    insert: (state, action) => {
      return [...state, action.payload];
    }
  }
});

export const { insert } = characterSlice.actions;
export default characterSlice.reducer;