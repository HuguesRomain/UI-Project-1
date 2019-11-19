import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import { Stars } from "../../atoms/Stars";
import { font, color, size, device } from "../../styles/const";

const CriticsStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${rem(350)};
  box-shadow: 1px 1px 15px 0px rgba(25, 25, 25, 0.2);
  color: ${color.text};
  border-radius: 10px;
  margin: ${rem(10)};
  @media (max-width: ${device.iphoneX}) {
    display: ${props => (props.hidden === true ? "none" : "flex")};
    margin: ${rem(20)} 0;
  }
`;

const CriticsContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${rem(260)};
  padding: ${rem(20)} 0;
`;

const Pics = styled.img`
  width: ${rem(70)};
  height: ${rem(70)};
`;

const Infos = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Title = styled.p`
  font-weight: ${font.heavy};
  font-size: ${size.bigText};
  width: ${rem(130)};
`;

const Descrition = styled.p`
  width: ${rem(170)};
  font-size: ${size.veryMediumText};
  font-weight: ${font.heavy};
  margin: 0 0 ${rem(5)} 0;
  @media (max-width: ${device.iphoneX}) {
    padding-top: ${rem(10)};
  }
`;

export const Critics = ({ hidden, pics, title, description, number }) => {
  return (
    <CriticsStyle hidden={hidden}>
      <CriticsContent>
        <Pics src={pics} />
        <Infos>
          <Title>{title}</Title>
          <Descrition>{description}</Descrition>
          <Stars number={number} />
        </Infos>
      </CriticsContent>
    </CriticsStyle>
  );
};
