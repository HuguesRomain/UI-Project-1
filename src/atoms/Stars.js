import React from "react";
import styled from "styled-components";
import StarImg from "../images/star.png";
import { rem } from "polished";

const StarsStyle = styled.div`
  display: flex;
  width: ${rem(110)};
  justify-content: space-between;
`;

const Star = styled.img`
  width: ${rem(17)};
`;

export const Stars = ({ number }) => {
  return (
    <StarsStyle>
      {number === 1 ? (
        <Star src={StarImg} />
      ) : number === 2 ? (
        <>
          <Star src={StarImg} />
          <Star src={StarImg} />
        </>
      ) : number === 3 ? (
        <>
          <Star src={StarImg} />
          <Star src={StarImg} />
          <Star src={StarImg} />
        </>
      ) : number === 4 ? (
        <>
          <Star src={StarImg} />
          <Star src={StarImg} />
          <Star src={StarImg} />
          <Star src={StarImg} />
        </>
      ) : number === 5 ? (
        <>
          <Star src={StarImg} />
          <Star src={StarImg} />
          <Star src={StarImg} />
          <Star src={StarImg} />
          <Star src={StarImg} />
        </>
      ) : null}
    </StarsStyle>
  );
};
