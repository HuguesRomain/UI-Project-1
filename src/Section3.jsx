import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import { ContentSectionThree } from "./organisms/SectionThree/content-section-three";
import { color, font } from "./styles/const";

const SectionThreeStyle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${color.light};
  padding: ${rem(30)} 0;
  font-family: ${font.fontFamily};
`;

export const SectionThree = () => {
  return (
    <SectionThreeStyle>
      <ContentSectionThree />
    </SectionThreeStyle>
  );
};
