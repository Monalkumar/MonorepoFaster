import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increamment: (state) => {
      state.value = state.value + 1;
    },
  },
});

export const { increamment, decreament, increamentByNums } =
  counterSlice.actions;
export default counterSlice.reducer;
