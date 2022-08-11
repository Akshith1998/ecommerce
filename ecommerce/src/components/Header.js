import styled from "styled-components";
import { RiUserFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #00b386;
`;

const Heading = styled.h1`
  font-weight: 500;
  color: #333333;
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
  return (
    <Container>
      <Heading>ShopKart</Heading>
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
