import React from "react";
import styled from "styled-components";
import { ContentSectionFour } from "./organisms/SectionFour/content-section-four";

const SectionFourStyle = styled.div`
  width: 100%;
`;

export const SectionFour = () => {
  return (
    <SectionFourStyle>
      <ContentSectionFour></ContentSectionFour>
    </SectionFourStyle>
  );
};
