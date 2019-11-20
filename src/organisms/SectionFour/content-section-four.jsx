import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import { font, color, size, device } from "../../styles/const";
import { Icon } from "../../images/svg";
import { Critics } from "../../molecules/SectionFour/Critics";
import Profile1 from "../../images/profilePic/ProfileCritics1.png";
import Stephanie from "../../images/profilePic/Stéphanie.png";
import Constance from "../../images/profilePic/Constance.png";
import Hugues from "../../images/profilePic/Hugues.png";
import Patrick from "../../images/profilePic/Patrick.png";
import Medore from "../../images/profilePic/Medore.png";
import Florentine from "../../images/profilePic/Florentine.png";
import Vincent from "../../images/profilePic/Vincent.png";

const ContentSectionFourStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-family: ${font.fontFamily};
`;

const Title = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${rem(300)};
  color: ${color.text};
  font-weight: ${font.bolder};
  font-size: ${size.veryBigText};
`;

const AllCritics = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${rem(1440)};
  overflow-x: auto;
  padding: ${rem(40)} 0;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: ${device.iphoneX}) {
    width: 100%;
    overflow-x: visible;
  }
`;

const CriticsOne = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${rem(1700)};
  margin: 0 0 0 ${rem(100)};
  @media (max-width: ${device.iphoneX}) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin: 0 0 0 0;
  }
`;
const CriticsTwo = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${rem(1700)};
  margin: 0 0 0 ${rem(330)};
  padding: ${rem(15)} 0;
  @media (max-width: ${device.iphoneX}) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin: 0 0 0 0;
  }
`;

export const ContentSectionFour = () => {
  return (
    <ContentSectionFourStyle>
      <Title>
        <Icon icon={"happy"} />
        Ils sont fières de nous.
      </Title>
      <AllCritics>
        <CriticsOne>
          <Critics
            pics={Profile1}
            title={"Aditya et Anju"}
            description={"itu benar-benar baik kami memiliki waktu yang tak"}
            number={4}
            hidden={true}
          />
          <Critics
            pics={Stephanie}
            title={"Florentine"}
            description={"C’était ok cool."}
            number={3}
          />
          <Critics
            pics={Constance}
            title={"Constance"}
            description={"J’ai passé des vacances magique."}
            number={4}
          />
          <Critics
            pics={Hugues}
            title={"Hugues"}
            description={"Éclaté au sol leurs services, minable."}
            number={1}
          />
        </CriticsOne>
        <CriticsTwo>
          <Critics
            pics={Patrick}
            title={"Patrick"}
            description={"Franchement ça tue de fou ce service."}
            number={4}
            hidden={true}
          />
          <Critics
            pics={Medore}
            title={"Medore"}
            description={"Wouaf ! Wouaf ! grrrrr…Wouaf !"}
            number={5}
            hidden={true}
          />
          <Critics
            pics={Florentine}
            title={"Florentine"}
            description={"Au top vraiment rien à redire."}
            number={4}
            hidden={true}
          />
          <Critics
            pics={Vincent}
            title={"Vincent"}
            description={"La télé ! La télé !"}
            number={4}
            hidden={true}
          />
        </CriticsTwo>
      </AllCritics>
    </ContentSectionFourStyle>
  );
};
