import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import { device } from "./styles/const";
import { ContentSectionFive } from "./organisms/SectionFive/content-section-five";

const SectionFiveStyle = styled.div`
  margin: ${rem(100)} 0;
  @media (max-width: ${device.iphoneX}) {
    margin: ${rem(150)} 0;
  }
`;

export const SectionFive = () => {
  return (
    <SectionFiveStyle>
      <ContentSectionFive></ContentSectionFive>
    </SectionFiveStyle>
  );
};
