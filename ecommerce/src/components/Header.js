import styled from "styled-components";
import { RiUserFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #00b386;
`;

const Heading = styled.h1`
  font-weight: 500;
  color: #333333;
  cursor: pointer;
`;

const Navbar = styled.div`
  display: flex;
  align-items: center;
`;

const NavbarLink = styled.div`
  display: flex;
  align-items: center;
  color: #f2f2f2;
  font-size: 20px;
  font-weight: 300;
`;

const Span = styled.span`
  margin-right: 20px;
`;

const Header = () => {
  const navigate = useNavigate();
  const handlenavigate = () => {
    navigate("/");
  };
  return (
    <Container>
      <Heading onClick={handlenavigate}>ShopKart</Heading>
      <Navbar>
        <NavbarLink>
          <RiUserFill />
          <Span>Sign In</Span>
        </NavbarLink>
        <NavbarLink>
          <FaShoppingCart />
          <Span>Cart</Span>
        </NavbarLink>
      </Navbar>
    </Container>
  );
};

export default Header;
