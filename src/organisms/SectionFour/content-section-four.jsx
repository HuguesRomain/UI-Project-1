import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import { font, color, size, device } from "../../styles/const";
import HappyIcon from "../../images/happy.png";
import { Critics } from "../../molecules/SectionFour/Critics";
import Profile1 from "../../images/profilePic/ProfileCritics1.png";

const ContentSectionFourStyle = styled.div`
  display: flex;
  justify-content: center;
  font-family: ${font.fontFamily};
  width: 100%;
`;

const Title = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${rem(300)};
  color: ${color.text};
  font-weight: ${font.bolder};
  font-size: ${size.veryBigText};
  margin: 0 0 ${rem(20)} ${rem(150)};
  @media (max-width: ${device.iphoneX}) {
    margin: 0 0 ${rem(20)} ${rem(30)};
  }
`;

const AllCritics = styled.div``;
const CriticsOne = styled.div``;
const CriticsTwo = styled.div``;

export const ContentSectionFour = () => {
  return (
    <ContentSectionFourStyle>
      <Title>
        <img style={{ width: size.icon }} src={HappyIcon} />
        Ils sont fière de nous.
      </Title>
      <AllCritics>
        <CriticsOne>
          <Critics
            pics={Profile1}
            title={"Aditya et Anju"}
            description={"itu benar-benar baik kami memiliki waktu yang tak"}
            number={4}
          />
        </CriticsOne>
        <CriticsTwo></CriticsTwo>
      </AllCritics>
    </ContentSectionFourStyle>
  );
};
