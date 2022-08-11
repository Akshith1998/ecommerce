import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/UserSlice";
import styled from "styled-components";
import Header from "../components/Header";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <Header />
    </div>
  );
};

export default HomeScreen;
