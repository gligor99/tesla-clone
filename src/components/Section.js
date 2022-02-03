import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

const Section = ({ title, desc, backgroundImg, leftBtnText, rightBtnText}) => {
  return (
    <Wrapper bgImage={backgroundImg}>
      <Fade delay={300}>
        <ItemText>
          <h1>{title}</h1>
          <p>{desc}</p>
        </ItemText>
      </Fade>
      <Fade delay={300}>
        <Buttons>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
          <span>
            <DownArrow src={"/images/down-arrow.svg"} />
          </span>
        </Buttons>
      </Fade>
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
  display: flex;
  flex-direction: column;
  justify-content: space-between; // Vertical Alignment
  align-items: center; // Horizontal Aligment
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;

const ItemText = styled.div`
  z-index: 10;
  padding-top: 15vh;
  text-align: center;
  opacity: 0.85;

  h1 {
    font-size: 2.5rem;
  }

  p {
    font-weight: 400;
  }
`;

const Buttons = styled.div``;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 1.875rem;

  @media (max-width: 1050px) {
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
