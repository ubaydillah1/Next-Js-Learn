import { createSlice } from "@reduxjs/toolkit";
import { buyCake } from "../cakes/cakeSlice";

const initialState = {
  numOfIceCreams: 10,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    buyIceCream(state) {
      state.numOfIceCreams -= 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(buyCake, (state) => {
      state.numOfIceCreams -= 1;
    });
  },
});

export const { buyIceCream } = iceCreamSlice.actions;
export default iceCreamSlice.reducer;
