import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("product/list", async () => {
  //get all the products
  const products = await axios.get(
    "https://ecommerce-nuchange.herokuapp.com/products"
  );
  return products.data;
});

export const getProductDetails = createAsyncThunk(
  "product/details",
  async (id) => {
    //get a particular product based on the object id
    const product = await axios.get(
      `https://ecommerce-nuchange.herokuapp.com/products/${id}`
    );
    return product.data[0];
  }
);

export const Addtocart = createAsyncThunk("product/purchase", async (obj) => {
  //post request with the id and the quantity in the req body
  const product = await axios({
    url: "http://ecommerce-nuchange.herokuapp.com/product/quantity",
    method: "POST",
    data: { _id: obj.id, quantity: obj.quantity },
  });
  return product.data[0];
});

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    filteredproducts: [], //for filtered data
    productDetails: {}, //data of a particular product
  },
  reducers: {
    filter: (state, action) => {
      state.filteredproducts = action.payload;
    },
  },
  //extraReducers used for handling api calls
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
