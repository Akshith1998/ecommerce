import styled from "styled-components";

const Container = styled.div`
  border: 0.6px solid;
  width: 240px;
  padding: 10px;
  border-radius: 8px;
`;

const Image = styled.img`
  width: 200px;
  height: 150px;
  display: block;
  margin: 0 auto;
`;

const Name = styled.h1`
  margin-left: 10px;
`;

const Price = styled.span`
  margin-left: 10px;
  font-size: 20px;
`;

const Product = ({ product }) => {
  return (
    <Container>
      <Image src={product.image} alt="" />
      <Name>{product.name}</Name>
      <Price>${product.price}</Price>
    </Container>
  );
};

export default Product;
