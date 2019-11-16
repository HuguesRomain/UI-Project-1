import React from "react";
import styled from "styled-components";
import { rem, size } from "polished";
import { color } from "../styles/const";

const ButtonStyle = styled.div`
  border: solid 1px ${color.base};
  padding: ${rem(8)} ${rem(15)};
  border-radius: 20px;
  color: ${color.base};
  :hover {
    background-color: ${color.base};
    color: ${color.whitetext};
  }
`;

const Text = styled.p`
  font-size: ${size.littleText};
`;

export const Button = ({ content }) => {
  return (
    <ButtonStyle>
      <Text>{content}</Text>
    </ButtonStyle>
  );
};
