import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import IconVilla from "./images/iconvilla.png";
import { ContentSectionThree } from "./organisms/SectionThree/content-section-three";
import { color, font, size } from "./styles/const";

const SectionThreeStyle = styled.div`
  background-color: ${color.light};
  padding: ${rem(30)} 0;
  font-family: ${font.fontFamily};
`;

export const SectionThree = () => {
  return (
    <SectionThreeStyle>
      <ContentSectionThree></ContentSectionThree>
    </SectionThreeStyle>
  );
};
