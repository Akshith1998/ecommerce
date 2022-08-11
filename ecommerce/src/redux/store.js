import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./UserSlice";

export default configureStore({
  reducer: {
    product: productSlice.reducer,
  },
});
