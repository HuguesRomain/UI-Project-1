import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import { font, size, color, device } from "../../styles/const";

const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  color: ${color.text};
  font-weight: ${font.heavy};
  box-shadow: 1px 1px 15px 0px rgba(25, 25, 25, 0.2);
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: ${rem(100)};
  margin: ${rem(10)};
`;

const ImgContent = styled.img`
  width: ${rem(300)};
`;

const BonusTitle = styled.p`
  font-size: ${size.mediumText};
`;

const BonusDescription = styled.p`
  font-size: ${size.mediumText};
  width: ${rem(260)};
`;

export const Bonus = ({ title, content, img }) => {
  return (
    <CardStyle>
      <ImgContent src={img} />
      <TextContent>
        <BonusTitle>{title}</BonusTitle>
        <BonusDescription>{content}</BonusDescription>
      </TextContent>
    </CardStyle>
  );
};
