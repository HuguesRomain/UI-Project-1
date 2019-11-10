import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import { LeftPart } from "../molecules/SectionOne/left-part";
import { RightPart } from "../molecules/SectionOne/right-part";
import { color } from "../styles/const";

const SectionOneContent = styled.div`
  display: flex;
  background-color: ${color.base};
  justify-content: space-between;
  width: 100%;
`;

export const SectionOne = () => {
  return (
    <SectionOneContent>
      <LeftPart />
      <RightPart />
    </SectionOneContent>
  );
};
