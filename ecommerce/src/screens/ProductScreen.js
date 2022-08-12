import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import { getProductDetails, Addtocart } from "../redux/UserSlice";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { AiOutlineMinusSquare } from "react-icons/ai";

const Container = styled.div``;

const BackButton = styled.button`
  background-color: #00b386;
  border-radius: 7px;
  width: 70px;
  height: 40px;
  border: none;
  color: white;
  font-size: 20px;
  margin: 20px 70px;
  cursor: pointer;
  display: block;
`;

const Image = styled.img`
  width: 500px;
  height: 500px;
  margin: 20px 0px;
  border: 0.6px solid;
  padding: 20px;
  border-radius: 20px;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-evenly;
`;

const ContentWrapper = styled.div`
  width: 250px;
  border: 0.6px solid;
  padding: 10px;
  height: max-content;
  margin: 20px 0;
  border-radius: 20px;
`;

const Name = styled.h1`
  font-size: 40px;
  font-weight: 500;
`;

const Price = styled.h3`
  font-size: 30px;
  font-weight: 400;
`;

const Status = styled.h3`
  font-size: 30px;
  font-weight: 400;
`;

const SubWrapper = styled.div``;

const Quantity = styled.h3`
  display: flex;
  align-items: center;
  font-size: 30px;
  font-weight: 400;
`;

const AddToCart = styled.button`
  width: 120px;
  font-size: 20px;
  color: white;
  background: black;
  padding: 5px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  display: block;
  margin: 0 auto;
`;

const OutOfStock = styled.button`
  width: 120px;
  font-size: 20px;
  color: white;
  background: #008080;
  padding: 5px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  display: block;
  margin: 0 auto;
`;

const ProductScreen = () => {
  const [counter, setCounter] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const productdetails = useSelector((state) => state.product.productDetails);

  useEffect(() => {
    dispatch(getProductDetails(params.id));
  }, [dispatch, params.id]);

  const handlenavigate = () => {
    navigate("/");
  };

  const handleDecrement = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleaddtocart = (e) => {
    e.preventDefault();
    dispatch(Addtocart({ id: productdetails._id, quantity: counter }));
    navigate("/product/purchase");
  };

  return (
    <Container>
      <Header />
      <BackButton onClick={handlenavigate}>Back</BackButton>
      <Wrapper>
        <Image src={productdetails.image} alt="" />
        <ContentWrapper>
          <Name>{productdetails.name}</Name>
          <Price>Price : $ {productdetails.price}</Price>
          <Status>
            Status :{" "}
            {productdetails.available === 1 ? "In Stock" : "Out of Stock"}
          </Status>
          {productdetails.available === 1 && (
            <SubWrapper>
              <Quantity>
                Quantity :{" "}
                <AiOutlineMinusSquare
                  onClick={handleDecrement}
                  style={{ cursor: "pointer" }}
                />
                {counter}
                <AiOutlinePlusSquare
                  onClick={handleIncrement}
                  style={{ cursor: "pointer" }}
                />
              </Quantity>
              <AddToCart onClick={(e) => handleaddtocart(e)}>
                Add to cart
              </AddToCart>
            </SubWrapper>
          )}
          {productdetails.available === 0 && (
            <SubWrapper>
              <OutOfStock>Out of stock</OutOfStock>
            </SubWrapper>
          )}
        </ContentWrapper>
      </Wrapper>
    </Container>
  );
};

export default ProductScreen;
