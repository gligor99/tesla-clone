/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <a href="#">
        <img src="/images/logo.svg" alt="logo.svg" />
      </a>
      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
        <a href="#">Solar Roof</a>
        <a href="#">Solar Panel</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <a href="#">Menu</a>
      </RightMenu>
    </Container>
  );
};

export default Header;

// Styles
const Container = styled.div`
  min-height: 3.75rem;
  /* width: 100%; */
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.25rem;
  top: 0;
  left: 0;
  right: 0;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  @media (max-width: 768px){
    display: none;
  }

  a {
    padding: 0 1rem;
    font-weight: 500;
    text-transform: none;
    flex-wrap: nowrap;
  }
`;

const RightMenu = styled.div`
  a {
    padding: 0 1rem;
    font-weight: 500;
    text-transform: none;
    flex-wrap: nowrap;
  }
`;
