"use client";
import { createSlice } from "@reduxjs/toolkit";

const currency = createSlice({
  name: "currency",
  initialState: {
    currentCurrency: "USD",
    currentAmount: "50",
    isLoading: false,
    isError: false,
  },
  reducers: {
    setCurrency: (state, action) => {
      state.currentCurrency = action.payload;
      console.log("currency converted to " + state.currentCurrency);
    },
    setAmount: (state, action) => {
      state.currentAmount = action.payload;
    },
  },
});

export default currency.reducer;
export const { setCurrency, setAmount } = currency.actions;
