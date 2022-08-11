import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("product/details", async () => {
  const products = await axios.get(
    "https://ecommerce-nuchange.herokuapp.com/products"
  );
  return products.data;
});

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});
