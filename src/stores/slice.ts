import { createSlice } from "@reduxjs/toolkit";
import { Car } from "../do-not-open/temp";

const initialState = {
  recommendedCars: [] as Car[],
  compare: [] as number[]
};

export type StoreSliceState = typeof initialState;

const storeSlice = createSlice({
  name: "recommendedCars",
  initialState,
  reducers: {
    setRecommendedCars(state: StoreSliceState, action: { payload: Car[] }) {
      state.recommendedCars = action.payload;
    },
    setCompare(state: StoreSliceState, action: { payload: number }) {
         if (!state.compare.includes(action.payload)) {
            if (state.compare.length == 2) {
                state.compare.shift()
            }
            state.compare.push(action.payload)
         } 
    },
    clearCompare(state: StoreSliceState) {
        state.compare = []
    }
  },
});

export const { setRecommendedCars, setCompare, clearCompare } = storeSlice.actions;

export default storeSlice.reducer;