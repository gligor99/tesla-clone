/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import styled from "styled-components";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

// Icons
import { FaWindowClose } from "react-icons/fa";

const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  console.log(cars);

  return (
    <Container>
      <LeftMenu>
        <a>
          <img src="/images/logo.svg" alt="logo.svg" />
        </a>
      </LeftMenu>
      <Menu>
        {cars &&
          cars.map((car, index) => {
            return <a key={index}>{car}</a>;
          })}
      </Menu>
      <RightMenu>
        <a>Shop</a>
        <a to="account">Account</a>
        <a to="menu" onClick={() => setBurgerStatus(true)}>
          {" "}
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

const LeftMenu = styled.div`
  width: 243px;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  @media (max-width: 1058px) {
    display: none;
  }

  a {
    padding: 0 1rem;
    font-weight: 500;
    text-transform: none;
    flex-wrap: nowrap;
    transition: 0.3s;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
    }
  }
`;

const RightMenu = styled.div`
  a {
    padding: 0 1rem;
    font-weight: 500;
    text-transform: none;
    flex-wrap: nowrap;
    transition: 0.3s;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
    }
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
    padding: 1rem 1rem;
    transition: 0.3s;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 0.5rem;
    }

    a {
      font-weight: 500;
    }
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
  padding: 0.25rem 1.5rem;

  .close {
    height: 1.5rem;
    width: 1.5rem;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`;
