import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 240px;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  background: white;
  -webkit-box-shadow: 0px 0px 18px 2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 18px 2px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 18px 2px rgba(0, 0, 0, 0.75);
`;

const Image = styled.img`
  width: 200px;
  height: 150px;
  display: block;
  margin: 0 auto;
`;

const Name = styled.h1`
  margin-left: 10px;
  font-weight: 400;
`;

const Price = styled.span`
  margin-left: 10px;
  font-size: 20px;
`;

const Product = ({ product }) => {
  const navigate = useNavigate();
  const handlenavigate = () => {
    navigate(`/products/${product._id}`);
  };
  return (
    <Container onClick={handlenavigate}>
      {/*navigate to ProductScreen on click */}
      <Image src={product.image} alt="" />
      <Name>{product.name}</Name>
      <Price>Price : $ {product.price}</Price>
    </Container>
  );
};

export default Product;
