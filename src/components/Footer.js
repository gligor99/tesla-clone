import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <p>Tesla &copy; 2022</p>
      <span>Privacy Contact Careers News Engage Locations</span>
    </Container>
  );
};

export default Footer;

// Styles
const Container = styled.div`
  background-color: transparent;
  width: 100%;
  height: 3rem;
  font-weight: 300;
  font-size: 0.875rem;
  color: rgba(23, 26, 32, 0.8);
  display: flex;
  justify-content: center;

  p {
    margin: 0 1rem;
  }

  span {
    word-spacing: 1rem;
  }
`;
