/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import styled from "styled-components";
import { FaWindowClose } from "react-icons/fa";

const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);

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
        <a href="#" onClick={() => setBurgerStatus(true)}>
          Menu
        </a>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <FaWindowClose
            className="close"
            onClick={() => setBurgerStatus(false)}
          />
        </CloseWrapper>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Semi</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
        <li>
          <a href="#">Powerwall</a>
        </li>
        <li>
          <a href="#">Commercial Energy</a>
        </li>
        <li>
          <a href="#">Ultities</a>
        </li>
        <li>
          <a href="#">Find Us</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">Investor Relations</a>
        </li>
        <li>
          <a href="#">United States</a>
        </li>
      </BurgerNav>
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
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  @media (max-width: 768px) {
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

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #ffffff;
  width: 18.75rem;
  z-index: 10;
  list-style: none;
  padding: 1.25rem;
  text-align: start;
  display: flex;
  flex-direction: column;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s;

  li {
    padding: 1rem 0;

    a {
      font-weight: 500;
    }
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.25rem 1.5rem;

  .close {
    cursor: pointer;
  }
`;
