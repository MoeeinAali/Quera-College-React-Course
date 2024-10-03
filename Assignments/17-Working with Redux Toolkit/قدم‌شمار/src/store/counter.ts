import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  ...
}

const initialState: CounterState = {
  ...
};

export const counterSlice = createSlice({
  ...
});

export const {
  ... // export reducers actions here
} = counterSlice.actions;

export default counterSlice.reducer;
