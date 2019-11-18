import React from "react";
import styled from "styled-components";
import { rem, backgroundImages } from "polished";
import imgSection6 from "./images/Section6img.jpg";
import { color, size, font, device } from "./styles/const";

const SectionSixStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${rem(595)};
  color: ${color.base};
  font-family: ${font.fontFamily};
  @media (max-width: ${device.iphoneX}) {
    height: ${rem(300)};
  }
`;

const BackgroundImages = styled.img`
  width: 100%;
  height: 100%;
`;

const ContentSectionSix = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

const TextContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${size.veryBigText};
  z-index: 1;
  background-color: ${color.whitetext};
  height: ${rem(64)};
  width: ${rem(359)};
  font-weight: ${font.bolder};
  @media (max-width: ${device.iphoneX}) {
    width: ${rem(200)};
  }
`;

export const SectionSix = () => {
  return (
    <SectionSixStyle>
      <ContentSectionSix>
        <TextContent>Alors ? Convaincu ?</TextContent>
      </ContentSectionSix>
      <BackgroundImages src={imgSection6} />
    </SectionSixStyle>
  );
};
