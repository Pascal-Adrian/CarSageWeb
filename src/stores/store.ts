import { configureStore } from "@reduxjs/toolkit";
import storeSlice from "./slice";
import { Car } from "../do-not-open/temp";

export interface State {
    recommendedCars: {
        recommendedCars: Car[];
        compare: number[];
    }
}


const store = configureStore({
  reducer: {
    recommendedCars: storeSlice,
  },
});

export default store;
