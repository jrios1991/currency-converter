import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const productList: any = createAsyncThunk("fetchProducts", async () => {
  const res = await fetch("https://fakestoreapi.com/products?limit=10");
  return res.json();
});

const products = createSlice({
  name: "products",
  initialState: {
    data: [],
    isLoading: false,
    isError: false,
  },
  reducers: {
    load: (state, action) => {
      console.log("reduzzzzz");
    },
  },
  extraReducers(builder) {
    builder.addCase(productList.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(productList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(productList.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default products.reducer;
export const { load } = products.actions;
