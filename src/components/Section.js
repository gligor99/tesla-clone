import React from "react";
import styled from "styled-components";
import image from "../assets/images/model-s.jpg";
import arrowIcon from "../assets/images/down-arrow.svg";

const Section = () => {
  return (
    <Wrapper>
      <ItemText>
        <h1>Model S</h1>
        <p>Order Online For Touchless Delivery</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>Custom Order</LeftButton>
          <RightButton>Existing Inventory</RightButton>
        </ButtonGroup>
        <DownArrow src={arrowIcon} />
      </Buttons>
    </Wrapper>
  );
};

// Styles
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${image});
  display: flex;
  flex-direction: column;
  justify-content: space-between; // Vertical Alignment
  align-items: center; // Horizontal Aligment
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;

  p {
    font-weight: 400;
  }
`;

const Buttons = styled.div``;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 1.875rem;
  @media (max-width: 768px) {
      flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 2.5rem;
  width: 16rem;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6.25rem;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 0.85rem;
  font-weight: 300;
  cursor: pointer;
  margin: 0.5rem;
`;

const RightButton = styled(LeftButton)`
  background-color: #ffffff;
  opacity: 0.65;
  color: #000000;
  font-weight: 400;
`;

const DownArrow = styled.img`
  margin-bottom: 0.85rem;
  height: 2.5rem;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;

export default Section;
