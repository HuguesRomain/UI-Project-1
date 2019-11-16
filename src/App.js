import React from "react";
import styled from "styled-components";
import "./App.css";
import { SectionOne } from "./organisms/Section1";
import { SectionTwo } from "./organisms/Section2";
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
    </AppStyle>
  );
};
