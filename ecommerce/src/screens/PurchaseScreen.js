import { useSelector } from "react-redux";
import styled from "styled-components";
import Header from "../components/Header";

const Container = styled.div`
  background: #ebfafa;
  height: 100vh;
`;

const Wrapper = styled.div`
  width: 400px;
  margin: 50px auto;
  border: 0.6px solid;
  padding: 20px;
  border-radius: 15px;
  -webkit-box-shadow: 1px 2px 30px 8px rgba(0, 0, 0, 0.79);
  -moz-box-shadow: 1px 2px 30px 8px rgba(0, 0, 0, 0.79);
  box-shadow: 1px 2px 30px 8px rgba(0, 0, 0, 0.79);
  background: white;
  @media only screen and (max-width: 700px) {
    width: 300px;
  }
  @media only screen and (max-width: 480px) {
    width: 200px;
  }
`;

const Heading = styled.h1`
  font-weight: 500;
  @media only screen and (max-width: 700px) {
    font-size: 25px;
  }
  @media only screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 300px;
  height: 300px;
  @media only screen and (max-width: 700px) {
    width: 200px;
    height: 200px;
  }
  @media only screen and (max-width: 480px) {
    width: 150px;
    height: 150px;
  }
`;

const Name = styled.h3`
  font-weight: 300;
  font-size: 25px;
  @media only screen and (max-width: 700px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

const Price = styled.h3`
  font-weight: 300;
  font-size: 25px;
  @media only screen and (max-width: 700px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

const Quantity = styled.h3`
  font-weight: 300;
  font-size: 25px;
  @media only screen and (max-width: 700px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

const Vendor = styled.h3`
  font-weight: 300;
  font-size: 25px;
  @media only screen and (max-width: 700px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

const PurchaseScreen = () => {
  const productdetails = useSelector((state) => state.product.productDetails); //get productdetails after adding the quantity in json file
  return (
    <Container>
      <Header />
      <Wrapper>
        <Heading>Order Placed Successfully</Heading>
        <Image src={productdetails.image} alt="" />
        <Name>Name : {productdetails.name}</Name>
        <Price>Price : $ {productdetails.price}</Price>
        <Quantity>Quantity : {productdetails.quantity}</Quantity>
        <Vendor>Vendor : {productdetails.vendor}</Vendor>
      </Wrapper>
    </Container>
  );
};

export default PurchaseScreen;
