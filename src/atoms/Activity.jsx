import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import { font, size, color, device } from "../styles/const";

const ActivityStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${font.fontFamily};
  color: ${color.text};
  font-weight: ${font.heavy};
  box-shadow: 1px 1px 5px 0px rgba(147, 147, 147, 0.2);
  padding: 0 15px;
  height: 33px;
  border-radius: 16px;
  font-size: ${size.littleText};
  border: white 1px solid;
  cursor: default;
  :hover {
    border: ${color.base} 1px solid;
    box-sizing: content-box;
  }
  @media (max-width: ${device.iphoneX}) {
    display: ${props => (props.hidden === true ? "none" : "flex")};
  }
`;

export const Activity = ({ hidden, emoji, content }) => {
  return (
    <ActivityStyle hidden={hidden}>
      <span>{emoji}</span>
      <p>{content}</p>
    </ActivityStyle>
  );
};
