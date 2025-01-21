// cakeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    buyCake: (state) => {
      state.numOfCakes -= 1;
    },
  },
});

export const { buyCake } = cakeSlice.actions;

export default cakeSlice.reducer;
