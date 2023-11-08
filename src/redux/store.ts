import { configureStore } from "@reduxjs/toolkit";
import productReducer, { load } from "./features/product-slice";
import productidReducer from "./features/productId-slice";
import currencyReducer from "./features/currency-slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    productReducer,
    load,
    productRoute: productidReducer,
    currencyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
