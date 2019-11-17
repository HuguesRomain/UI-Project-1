import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import { LeftPart } from "./organisms/SectionOne/left-part";
import { RightPart } from "./organisms/SectionOne/right-part";
import { color, device } from "./styles/const";

const SectionOneContent = styled.div`
  display: flex;
  background-color: ${color.base};
  justify-content: space-between;
  width: 100%;
  @media (max-width: ${device.iphoneX}) {
    flex-direction: column;
    width: 100%;
  }
`;

export const SectionOne = () => {
  return (
    <SectionOneContent>
      <LeftPart />
      <RightPart />
    </SectionOneContent>
  );
};
