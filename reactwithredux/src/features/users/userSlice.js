import { createSlice } from "@reduxjs/toolkit";

const savedCount = JSON.parse(localStorage.getItem("count") || "0");

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: savedCount },
  reducers: {
    increamment: (state) => {
      state.value = state.value + 1;
      localStorage.setItem("count", JSON.stringify(state.value));
    },
  },
});

export const { increamment } = counterSlice.actions;
export default counterSlice.reducer;
