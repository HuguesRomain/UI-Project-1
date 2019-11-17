import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import { ContentSectionTwo } from "./organisms/SectionTwo/content-section-two";

const SectionTwoStyle = styled.div`
  display: flex;
  justify-content: center;
  margin: ${rem(50)} 0;
`;

export const SectionTwo = () => {
  return (
    <SectionTwoStyle>
      <ContentSectionTwo></ContentSectionTwo>
    </SectionTwoStyle>
  );
};
