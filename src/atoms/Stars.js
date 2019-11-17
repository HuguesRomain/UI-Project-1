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

export const Stars = ({ size, number }) => {
  return (
    <StarsStyle>
      {number === 1 ? (
        <Star size={size} src={StarImg} />
      ) : number === 2 ? (
        <>
          <Star size={size} src={StarImg} />
          <Star size={size} src={StarImg} />
        </>
      ) : number === 3 ? (
        <>
          <Star size={size} src={StarImg} />
          <Star size={size} src={StarImg} />
          <Star size={size} src={StarImg} />
        </>
      ) : number === 4 ? (
        <>
          <Star size={size} src={StarImg} />
          <Star size={size} src={StarImg} />
          <Star size={size} src={StarImg} />
          <Star size={size} src={StarImg} />
        </>
      ) : number === 5 ? (
        <>
          <Star size={size} src={StarImg} />
          <Star size={size} src={StarImg} />
          <Star size={size} src={StarImg} />
          <Star size={size} src={StarImg} />
          <Star size={size} src={StarImg} />
        </>
      ) : null}
    </StarsStyle>
  );
};
