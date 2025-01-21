import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./cakes/cakeSlice";
import iceCreamReducer from "./iceCreams/iceCreamSlice";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
  },
});

export default store;
