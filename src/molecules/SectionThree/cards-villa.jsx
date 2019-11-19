import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import { color, size, font, device } from "../../styles/const";
import { Icon } from "../../images/svg";
import { Stars } from "../../atoms/Stars";

const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  color: ${color.text};
  font-weight: ${font.heavy};
  margin: 0 0 ${rem(50)} 0;
  box-shadow: 1px 1px 15px 0px rgba(147, 147, 147, 0.2);
`;

const Text = styled.p`
  font-size: ${size.smallText};
  @media (max-width: ${device.iphoneX}) {
    font-size: ${size.verySmallText};
    width: ${rem(100)};
  }
`;

const VillaImg = styled.img`
  width: ${rem(230)};
  @media (max-width: ${device.iphoneX}) {
    width: ${rem(135)};
  }
`;

const CardsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${color.whitetext};
  border-radius: 0 0% 20px 20px;
  padding: ${rem(20)} ${rem(10)} ${rem(40)} ${rem(10)};
  @media (max-width: ${device.iphoneX}) {
    padding: ${rem(10)} ${rem(0)} ${rem(10)} ${rem(10)};
  }
`;

const VillaTitle = styled.p`
  font-size: ${size.mediumText};
  @media (max-width: ${device.iphoneX}) {
    font-size: ${size.smallText};
  }
`;

const VillaPosition = styled.div`
  display: flex;
  padding: ${rem(10)} 0;
`;

const PinStyle = styled(Icon)`
  width: ${rem(12)};
  margin: 0 ${rem(10)} 0 0;
  @media (max-width: ${device.iphoneX}) {
    width: ${rem(9)};
    height: ${rem(13)};
  }
`;

const PriceAndStars = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${rem(180)};
  @media (max-width: ${device.iphoneX}) {
    width: ${rem(90)};
  }
`;

export const CardsVilla = ({ image, title, adress, price, number }) => {
  return (
    <CardStyle>
      <VillaImg src={image} />
      <CardsContent>
        <VillaTitle>{title}</VillaTitle>
        <VillaPosition>
          <PinStyle icon={"pin"} />
          <Text>{adress}</Text>
        </VillaPosition>
        <PriceAndStars>
          <Text>{price}</Text>
          <Stars size={"10px"} number={number} />
        </PriceAndStars>
      </CardsContent>
    </CardStyle>
  );
};
