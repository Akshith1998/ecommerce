import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import { getProductDetails, Addtocart } from "../redux/UserSlice";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { AiOutlineMinusSquare } from "react-icons/ai";

const Container = styled.div`
  background: #ebfafa;
  height: 100vh;
`;

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
  @media only screen and (max-width: 480px) {
    font-size: 13px;
    width: 50px;
    height: 30px;
    margin: 10px 30px;
  }
`;

const Image = styled.img`
  width: 500px;
  height: 500px;
  margin: 20px 0px;
  padding: 20px;
  border-radius: 20px;
  background: white;
  -webkit-box-shadow: 0px 0px 25px 3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 25px 3px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 25px 3px rgba(0, 0, 0, 0.75);
  @media only screen and (max-width: 700px) {
    width: 300px;
    height: 300px;
  }
  @media only screen and (max-width: 480px) {
    width: 200px;
    height: 200px;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-evenly;
  @media only screen and (max-width: 1000px) {
    grid-template-columns: auto;
  }
`;

const ContentWrapper = styled.div`
  width: 250px;
  padding: 10px;
  height: max-content;
  margin: 20px 0;
  border-radius: 20px;
  background: white;
  -webkit-box-shadow: 0px 0px 25px 3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 25px 3px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 25px 3px rgba(0, 0, 0, 0.75);
  @media only screen and (max-width: 480px) {
    width: 150px;
  }
`;

const Name = styled.h1`
  font-size: 40px;
  font-weight: 500;
  @media only screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

const Price = styled.h3`
  font-size: 30px;
  font-weight: 400;
  @media only screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

const Status = styled.h3`
  font-size: 30px;
  font-weight: 400;
  @media only screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

const SubWrapper = styled.div``;

const Quantity = styled.h3`
  display: flex;
  align-items: center;
  font-size: 30px;
  font-weight: 400;
  @media only screen and (max-width: 480px) {
    font-size: 20px;
  }
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
  @media only screen and (max-width: 480px) {
    font-size: 10px;
    width: 80px;
  }
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
  @media only screen and (max-width: 480px) {
    font-size: 10px;
    width: 80px;
  }
`;

const ProductScreen = () => {
  const [counter, setCounter] = useState(1); //state used for selecting the quantity
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const productdetails = useSelector((state) => state.product.productDetails); //get the productdetails from redux store

  useEffect(() => {
    dispatch(getProductDetails(params.id)); //call the getProductDetails method with id as parameter
  }, [dispatch, params.id]);

  const handlenavigate = () => {
    navigate("/");
  };

  const handleDecrement = () => {
    //only decrease when quantity is greater than 1
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleaddtocart = (e) => {
    e.preventDefault();
    dispatch(Addtocart({ id: productdetails._id, quantity: counter })); //call Addtocart method with an object as parameter
    navigate("/product/purchase"); //after purchase navigate to purchase screen
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
          {/*the below code if the product is in stock */}
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
          {/*the below code if the product is out of stock */}
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
