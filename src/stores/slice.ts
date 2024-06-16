import { createSlice } from "@reduxjs/toolkit";
import { Car } from "../do-not-open/temp";

const initialState = {
  recommendedCars: [] as Car[],
};

export type StoreSliceState = typeof initialState;

const storeSlice = createSlice({
  name: "recommendedCars",
  initialState,
  reducers: {
    setRecommendedCars(state: StoreSliceState, action: { payload: Car[] }) {
      state.recommendedCars = action.payload;
    },
  },
});

export const { setRecommendedCars } = storeSlice.actions;

export default storeSlice.reducer;