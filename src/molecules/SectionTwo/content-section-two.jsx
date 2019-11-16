import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import { font, size, color, device } from "../../styles/const";
import { Activity } from "../../atoms/Activity";
import { Button } from "../../atoms/Button";

const ContentStyle = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  font-family: ${font.fontFamily};
  height: ${rem(290)};
`;

const ContentText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: ${rem(60)};
  @media (max-width: ${device.iphoneX}) {
    height: ${rem(90)};
  }
`;

const Title = styled.p`
  font-size: ${size.veryBigText};
  font-weight: ${font.bolder};
  color: ${color.text};
`;

const Description = styled.p`
  font-size: ${size.veryBigText};
  font-weight: ${font.medium};
  color: ${color.text};
  @media (max-width: ${device.iphoneX}) {
    width: ${rem(360)};
    text-align: center;
  }
`;

const AllActivity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: ${rem(130)};
`;

const ActivityContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${rem(600)};
  @media (max-width: ${device.iphoneX}) {
    width: ${rem(215)};
  }
`;

const ActivityMiddleContent = styled(ActivityContent)`
  width: ${rem(650)};
  @media (max-width: ${device.iphoneX}) {
    width: ${rem(300)};
  }
`;

export const ContentSectionTwo = () => {
  return (
    <ContentStyle>
      <ContentText>
        <Title>Trouvez le lieu de vos rêves.</Title>
        <Description>
          Quelle est la destination qui vous conviennent ?
        </Description>
      </ContentText>
      <AllActivity>
        <ActivityContent>
          <Activity emoji={"🌲"} content={"Nature"} />
          <Activity hidden={true} emoji={"🗽"} content={"Monuments"} />
          <Activity emoji={"💰"} content={"Low cost"} />
          <Activity hidden={true} emoji={"☕️"} content={"Chill"} />
          <Activity hidden={true} emoji={"🔥"} content={"Chalereux"} />
        </ActivityContent>
        <ActivityMiddleContent>
          <Activity emoji={"🏖"} content={"Plage"} />
          <Activity emoji={"📸"} content={"Photo"} />
          <Activity emoji={"🕹"} content={"Jeux"} />
          <Activity hidden={true} emoji={"🥳"} content={"Party"} />
          <Activity hidden={true} emoji={"🏀"} content={"Sport"} />
          <Activity hidden={true} emoji={"🍣"} content={"Réstaurant"} />
        </ActivityMiddleContent>
        <ActivityContent>
          <Activity emoji={"🌈"} content={"Beau"} />
          <Activity emoji={"🐅"} content={"Sauvage"} />
          <Activity hidden={true} emoji={"🤠"} content={"Avanture"} />
          <Activity hidden={true} emoji={"👠"} content={"Shopping"} />
          <Activity hidden={true} emoji={"💊"} content={"Drogue"} />
        </ActivityContent>
      </AllActivity>
      <Button content={"Plus d’activité"} />
    </ContentStyle>
  );
};
