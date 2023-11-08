import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const productWithId = createAsyncThunk(
  "fetchProductWithId",
  async (productId: number) => {
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
    return res.json();
  }
);
export const productID = createSlice({
  name: "product",
  initialState: {
    routeId: 0,
    data: [{}],
    isLoading: false,
    isError: false,
  },
  reducers: {
    configureRoute: (state, action) => {
      state.routeId = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(productWithId.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(productWithId.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(productWithId.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export const { configureRoute } = productID.actions;

export default productID.reducer;
