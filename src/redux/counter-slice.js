import { createSlice } from "@reduxjs/toolkit";
import { saveStorage, getStorage } from "../helpers";
const counter = createSlice({
  name: "counter",
  initialState: {
    velue: +getStorage("count") || 9,
  },
  reducers: {
    inc: (state, action) => {
      state.velue += action.payload;
      saveStorage("count", state.velue);
    },
    dec: (state) => {
      state.velue -= 1;
      saveStorage("count", state.velue);
    },
    rest: (state) => {
      state.velue = 0;
      saveStorage("count", state.velue);
    },
  },
});
export const { inc, dec, rest } = counter.actions;
export default counter.reducer;
