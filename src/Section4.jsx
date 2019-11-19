import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import { device } from "./styles/const";
import { ContentSectionFour } from "./organisms/SectionFour/content-section-four";

const SectionFourStyle = styled.div`
  display: flex;
  justify-content: center;
  margin: ${rem(50)} 0;
  @media (max-width: ${device.iphoneX}) {
    margin: ${rem(50)} 0 0 0;
  }
`;

export const SectionFour = () => {
  return (
    <SectionFourStyle>
      <ContentSectionFour />
    </SectionFourStyle>
  );
};
