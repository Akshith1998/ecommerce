import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/UserSlice";
import styled from "styled-components";
import Header from "../components/Header";
import Product from "../components/Product";

const Container = styled.div``;

const Category = styled.div`
  width: 150px;
  margin: 40px;
  cursor: pointer;
  position: relative;
`;

const SelectProduct = styled.div`
  background-color: #ffb3b3;
  border: 1px solid;
  font-size: 20px;
  padding: 5px;
`;

const CategoryWrapper = styled.div`
  position: absolute;
`;

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-row-gap: 30px;
  padding: 10px;
  justify-content: space-evenly;
`;

const HomeScreen = () => {
  const [hover, setHover] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handlehover = () => {
    setHover(!hover);
  };

  const handlecategory = (e) => {};

  return (
    <Container>
      <Header />
      <Category onMouseEnter={handlehover} onMouseLeave={handlehover}>
        <SelectProduct>Category</SelectProduct>
        {hover && (
          <CategoryWrapper onClick={(e) => handlecategory(e)}>
            <SelectProduct>men's clothing</SelectProduct>
            <SelectProduct>jewelery</SelectProduct>
            <SelectProduct>electronics</SelectProduct>
            <SelectProduct>women's clothing</SelectProduct>
          </CategoryWrapper>
        )}
      </Category>
      <ProductWrapper>
        {products.map((product) => {
          return <Product product={product} key={product._id} />;
        })}
      </ProductWrapper>
    </Container>
  );
};

export default HomeScreen;
