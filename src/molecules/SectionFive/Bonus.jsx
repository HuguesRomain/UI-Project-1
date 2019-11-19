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
  @media (max-width: ${device.iphoneX}) {
    margin: 0 0 ${rem(30)} 0;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: ${rem(10)};
`;

const ImgContent = styled.img`
  width: ${rem(300)};
  @media (max-width: ${device.iphoneX}) {
    width: ${rem(250)};
  }
`;

const BonusTitle = styled.p`
  font-size: ${size.mediumText};
  padding: ${rem(10)} 0;
  @media (max-width: ${device.iphoneX}) {
    width: ${rem(200)};
  }
`;

const BonusDescription = styled.p`
  font-size: ${size.mediumText};
  width: ${rem(260)};
  padding: ${rem(10)} 0;
  @media (max-width: ${device.iphoneX}) {
    width: ${rem(200)};
  }
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
