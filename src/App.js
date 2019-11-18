import React from "react";
import styled from "styled-components";
import "./App.css";
import { SectionOne } from "./Section1";
import { SectionTwo } from "./Section2";
import { SectionThree } from "./Section3";
import { SectionFour } from "./Section4";
import { SectionFive } from "./Section5";
import { device } from "./styles/const";

const AppStyle = styled.div`
  @media (max-width: ${device.iphoneX}) {
    width: 100%;
  }
`;

export const App = () => {
  return (
    <AppStyle className="App">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </AppStyle>
  );
};
