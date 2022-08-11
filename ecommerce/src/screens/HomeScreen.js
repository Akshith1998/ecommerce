import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/UserSlice";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return <div>HomeScreen</div>;
};

export default HomeScreen;
