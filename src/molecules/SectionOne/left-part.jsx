import React from "react";
import styled from "styled-components";
import Deadend from "../../images/deadend.jpg";
import { rem } from "polished";
import { color } from "../../styles/const";

const BackgroundImage = styled.div`
  width: ${rem(1300)};
  clip-path: polygon(0 0, 100% 0%, 90% 100%, 0% 100%);
  img {
    width: 100%;
    height: 100%;
  }
`;

export const LeftPart = () => {
  return (
    <BackgroundImage>
      <img src={Deadend} alt="" />
    </BackgroundImage>
  );
};
