import React from "react";
import styled from "styled-components";
import Deadend from "../../images/deadend.jpg";
import { rem } from "polished";
import { color, font, device } from "../../styles/const";
import Profile from "../../images/profilePic/profileHome1.png";
import Pin from "../../images/pin.png";
import { Icon } from "../../images/svg";
import { Stars } from "../../atoms/Stars";

const Content = styled.div`
  display: flex;
  align-items: flex-end;
`;

const BackgroundImage = styled.div`
  width: ${rem(950)};
  height: 100%;
  clip-path: polygon(0 0, 100% 0%, 90% 100%, 0% 100%);
  img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: ${device.iphoneX}) {
    width: ${rem(950)};
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
  }
`;

const Avis = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${rem(300)};
  position: absolute;
  z-index: 1;
  font-family: ${font.fontFamily};
  @media (max-with: ${device.iphoneX}) {
    margin: 0 0 0 0;
  }
`;

const ProfilePic = styled.img`
  position: absolute;
  width: ${rem(50)};
  margin: ${rem(10)} ${rem(35)};
`;

const Name = styled.div`
  display: flex;
  justify-content: center;
  padding: ${rem(5)} 0;
  width: ${rem(150)};
  font-weight: ${font.bolder};
  color: ${color.textInput};
  background-color: ${color.base};
  border-radius: 3px;
`;

const Comment = styled.p`
  font-weight: ${font.bolder};
  color: ${color.whitetext};
`;

const ContentAvis = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${rem(70)};
  margin: 0 0 ${rem(50)} ${rem(100)};
  @media (max-width: ${device.iphoneX}) {
    height: ${rem(80)};
    margin: 0 0 ${rem(130)} ${rem(100)};
  }
`;

const Position = styled.div`
  display: flex;
  width: ${rem(850)};
  align-items: flex-end;
  justify-content: flex-end;
  position: absolute;
  z-index: 1;
  font-family: ${font.fontFamily};
  @media (max-width: ${device.iphoneX}) {
    width: ${rem(0)};
    margin: 0 0 0 ${rem(370)};
  }
`;

const PositionContent = styled.div`
  display: flex;
  width: ${rem(250)};
  margin: 0 0 ${rem(20)} ${rem(500)};
`;

const PinStyle = styled.img`
  width: ${rem(16)};
  @media (max-width: ${device.iphoneX}) {
    height: ${rem(21)};
    width: ${rem(16)};
  }
`;

const City = styled.p`
  font-weight: ${font.bolder};
  color: ${color.whitetext};
  margin: ${rem(5)} 0 0 ${rem(15)};
  width: ${rem(180)};
`;

export const LeftPart = () => {
  return (
    <Content>
      <Avis>
        <ProfilePic src={Profile} alt="" />
        <ContentAvis>
          <Name>Aurélie Dubois</Name>
          <Comment>Un lieu juste incroyable.</Comment>
          <Stars number={5} />
        </ContentAvis>
      </Avis>
      <Position>
        <PositionContent>
          <Icon icon={"pin"} />
          <City>Los Angeles, California</City>
        </PositionContent>
      </Position>
      <BackgroundImage>
        <img src={Deadend} alt="" />
      </BackgroundImage>
    </Content>
  );
};
