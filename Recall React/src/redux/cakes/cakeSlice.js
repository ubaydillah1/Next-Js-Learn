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
      if (state.numOfCakes <= 0) {
        return;
      }
      state.numOfCakes -= 1;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

export const { buyCake, restocked } = cakeSlice.actions;

export default cakeSlice.reducer;
