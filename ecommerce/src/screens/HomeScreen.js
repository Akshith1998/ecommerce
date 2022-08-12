import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/UserSlice";
import styled from "styled-components";
import Header from "../components/Header";
import Product from "../components/Product";
import { filter } from "../redux/UserSlice";
import { AiOutlineDown } from "react-icons/ai";

const Container = styled.div`
  background: #ebfafa;
`;

const Category = styled.div`
  width: 150px;
  margin: 40px;
  cursor: pointer;
  position: relative;
`;

const SelectProduct = styled.div`
  display: flex;
  align-items: center;
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
  @media only screen and (max-width: 1000px) {
    grid-template-columns: auto auto;
  }
  @media only screen and (max-width: 700px) {
    grid-template-columns: auto;
  }
`;

const HomeScreen = () => {
  const [hover, setHover] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products); //get the products from redux store
  const filteredproducts = useSelector(
    //get the filtered products from redux store
    (state) => state.product.filteredproducts
  );
  useEffect(() => {
    dispatch(getProducts()); //call the getProducts method with no parameters
  }, [dispatch]);

  const handlehover = () => {
    setHover(!hover);
  };

  const handlecategory = (e) => {
    const filteredproducts = products.filter(
      (product) => product.category === e.target.innerHTML
    );
    dispatch(filter(filteredproducts)); //call the filteredproducts method with the filtered data
  };

  return (
    <Container>
      <Header />
      <Category onMouseEnter={handlehover} onMouseLeave={handlehover}>
        {/*show the categories on hover */}
        <SelectProduct>
          Category <AiOutlineDown style={{ margin: "0 10px" }} />
        </SelectProduct>
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
        {/*import Product component and loop through the filtered array to pass the props */}
        {filteredproducts.map((product) => {
          return <Product product={product} key={product._id} />;
        })}
      </ProductWrapper>
    </Container>
  );
};

export default HomeScreen;
