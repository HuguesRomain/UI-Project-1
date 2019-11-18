import React from "react";
import styled from "styled-components";
import StarImg from "../images/star.png";
import { rem } from "polished";
import { device } from "../styles/const";

const StarsStyle = styled.div`
  display: flex;
  width: ${rem(110)};
`;

const Star = styled.img`
  width: ${rem(17)};
  margin: 0 ${rem(10)} 0 0;
  @media (max-width: ${device.iphoneX}) {
    width: ${props => (props.size ? props.size : rem(17))};
    margin: ${props => (props.size ? rem(2) : rem(5))};
    height: ${props => (props.size ? rem(10) : rem(17))};
  }
`;

const Repeat = props => {
  let elements = [];
  for (let i = 0; i < props.number; i++) {
    elements.push(<Star size={props.size} src={StarImg} />);
  }
  return elements;
};

export const Stars = ({ size, number }) => {
  return (
    <StarsStyle>
      <Repeat size={size} number={number} />
    </StarsStyle>
  );
};
