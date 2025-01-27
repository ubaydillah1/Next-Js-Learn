import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./cakes/cakeSlice";
import iceCreamReducer from "./iceCreams/iceCreamSlice";
import logger from "redux-logger";
import fetchDataReducer from "./fetchData/fechDataSlice";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    fetchData: fetchDataReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
