import React from "react";
// import styled from "styled-components";
import ReactPageScroller from "react-page-scroller";
// Components
import Section from "./Section";

const Home = () => {
  return (
    <ReactPageScroller>
      <Section
        id="model-s"
        title="Model S"
        desc="Order Online For Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        id="model-3"
        title="Model 3"
        desc="Order Online For Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        id="model-x"
        title="Model X"
        desc="Order Online For Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model Y"
        desc="Order Online For Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Solar Roof"
        desc="Lowest Cost Solar Panels in America"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Solar Panel"
        desc="Produce Clean Energy From Your Roof"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Accessories"
        desc=""
        backgroundImg="accessories.jpg"
        leftBtnText="Order Now"
      />
    </ReactPageScroller>
  );
};
export default Home;

// Styles
// const Container = styled.div`
// `;
