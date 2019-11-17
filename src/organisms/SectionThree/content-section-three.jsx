import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import { font, color, size, device } from "../../styles/const";
import IconVilla from "../../images/iconvilla.png";
import { CardsVilla } from "../../molecules/SectionThree/cards-villa";
import Villa1 from "../../images/villa/villa1.jpg";
import Villa2 from "../../images/villa/villa2.jpg";
import Villa3 from "../../images/villa/villa3.jpg";
import Villa4 from "../../images/villa/villa4.jpg";
import Villa5 from "../../images/villa/villa5.jpg";
import Villa6 from "../../images/villa/villa6.jpg";

const ContentStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: ${font.fontFamily};
`;

const AllVilla = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: ${rem(900)};
  border-spacing: 5px 1rem;
  @media (max-width: ${device.iphoneX}) {
    width: ${rem(320)};
  }
`;

const Title = styled.div`
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
export const ContentSectionThree = () => {
  return (
    <>
      <Title>
        <img style={{ width: size.icon }} src={IconVilla} />
        Nos villa de vos rêves.
      </Title>
      <ContentStyle>
        <AllVilla>
          <CardsVilla
            title={"The yellow house"}
            image={Villa1}
            adress={"16 Hermount Street, Los Angeles"}
            price={"120$/day"}
            number={3}
          />
          <CardsVilla
            title={"The green house"}
            image={Villa2}
            adress={"9194 High Ridge St.Glendora"}
            price={"120$/day"}
            number={4}
          />
          <CardsVilla
            title={"The green house"}
            image={Villa3}
            adress={"9194 High Ridge St.Glendora"}
            price={"120$/day"}
            number={4}
          />
          <CardsVilla
            title={"The yellow house"}
            image={Villa4}
            adress={"16 Hermount Street, Los Angeles"}
            price={"120$/day"}
            number={3}
          />
          <CardsVilla
            title={"Not incredible house"}
            image={Villa5}
            adress={"16 Hermount Street, Los Angeles"}
            price={"120$/day"}
            number={2}
          />
          <CardsVilla
            title={"The yellow house"}
            image={Villa6}
            adress={"16 Hermount Street, Los Angeles"}
            price={"120$/day"}
            number={3}
          />
        </AllVilla>
      </ContentStyle>
    </>
  );
};
