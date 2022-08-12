import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("product/list", async () => {
  const products = await axios.get(
    "https://ecommerce-nuchange.herokuapp.com/products"
  );
  return products.data;
});

export const getProductDetails = createAsyncThunk(
  "product/details",
  async (id) => {
    const product = await axios.get(
      `https://ecommerce-nuchange.herokuapp.com/products/${id}`
    );
    return product.data[0];
  }
);

export const Addtocart = createAsyncThunk("product/purchase", async (obj) => {
  const product = await axios({
    url: "http://ecommerce-nuchange.herokuapp.com/product/quantity",
    method: "POST",
    data: { _id: obj.id, quantity: obj.quantity },
  });
  return product.data;
});

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    filteredproducts: [],
    productDetails: {},
  },
  reducers: {
    filter: (state, action) => {
      state.filteredproducts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.filteredproducts = action.payload;
    });
    builder.addCase(getProductDetails.fulfilled, (state, action) => {
      state.productDetails = action.payload;
    });
    builder.addCase(Addtocart.fulfilled, (state, action) => {
      state.productDetails = action.payload;
    });
  },
});

export const { filter } = productSlice.actions;
