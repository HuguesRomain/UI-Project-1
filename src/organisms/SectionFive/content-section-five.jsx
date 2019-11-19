import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import { size, font, color, device } from "../../styles/const";
import { Icon } from "../../images/svg";
import { Bonus } from "../../molecules/SectionFive/Bonus";
import Netflix from "../../images/netflix.jpg";
import Lyft from "../../images/lyft.jpg";
import Pyszne from "../../images/pyszne.jpg";

const ContentSectionFiveStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: ${font.fontFamily};
  height: ${rem(400)};
  @media (max-width: ${device.iphoneX}) {
    height: ${rem(800)};
  }
`;

const Title = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${rem(300)};
  color: ${color.text};
  font-weight: ${font.bolder};
  font-size: ${size.veryBigText};
  @media (max-width: ${device.iphoneX}) {
    margin: 0 0 ${rem(20)} 0;
  }
`;

const AllBonus = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${rem(1200)};
  @media (max-width: ${device.iphoneX}) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const ContentSectionFive = () => {
  return (
    <ContentSectionFiveStyle>
      <Title>
        <Icon icon={"like"} />
        Quelques petits bonus
      </Title>
      <AllBonus>
        <Bonus
          img={Netflix}
          title={"Profitez d’un abonnement Netflix"}
          content={"Valable pendant toute la durée de votre séjour."}
        />
        <Bonus
          img={Lyft}
          title={"-20% sur vos déplacements"}
          content={"Avec Lyft pendant toute la durée de votre séjour."}
        />
        <Bonus
          img={Pyszne}
          title={"-20% sur tout ce que vous mangez"}
          content={"Grâce à Pyszne.pl pendant toute la durée de votre séjour. "}
        />
      </AllBonus>
    </ContentSectionFiveStyle>
  );
};
