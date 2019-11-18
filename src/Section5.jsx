import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import { ContentSectionFive } from "./organisms/SectionFive/content-section-five";

const SectionFiveStyle = styled.div`
  margin: ${rem(100)} 0;
  display: none;
`;

export const SectionFive = () => {
  return (
    <SectionFiveStyle>
      <ContentSectionFive></ContentSectionFive>
    </SectionFiveStyle>
  );
};
