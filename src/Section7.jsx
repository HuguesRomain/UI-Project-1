import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import { font, color, device } from "./styles/const";
import { Social } from "./images/Social";

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${font.fontFamily};
  font-weight: ${font.heavy};
  color: ${color.text};
  padding: ${rem(50)} 0;
`;

const ContentFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 55%;
  @media (max-width: ${device.iphoneX}) {
    flex-direction: column;
    width: 100%;
  }
`;

const Element = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${rem(80)};
`;

const Text = styled.p`
  :hover {
    color: ${color.base};
    cursor: default;
  }
`;

const Socials = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${rem(130)};
`;

const GroupeElementsOne = styled.div`
  display: flex;
  width: ${rem(300)};
  justify-content: space-between;
  @media (max-width: ${device.iphoneX}) {
    width: 100%;
    justify-content: space-around;
  }
`;

const GroupeElementsTwo = styled.div`
  display: flex;
  width: ${rem(420)};
  justify-content: space-between;
  @media (max-width: ${device.iphoneX}) {
    width: ${rem(300)};
    justify-content: space-around;
    flex-direction: column;
    padding-top: ${rem(40)};
  }
`;

export const SectionSeven = () => {
  return (
    <Footer>
      <ContentFooter>
        <GroupeElementsOne>
          <Element>
            <Text style={{ color: color.base }}>Clients</Text>
            <Text>Acheteurs</Text>
            <Text>Fournisseur</Text>
          </Element>
          <Element style={{ height: rem(100) }}>
            <Text style={{ color: color.base }}>Entreprise</Text>
            <a href="https://news.airbnb.com/fr/">
              <Text>About us</Text>
            </a>
            <a href="https://careers.airbnb.com/">
              <Text>Carrière</Text>
            </a>
            <a href="https://www.booking.com/content/contact-us.fr.html?aid=397594;label=gog235jc-1DCAEoggI46AdIDVgDaE2IAQGYAQ24AQfIAQzYAQPoAQH4AQKIAgGoAgO4AvnRzu4FwAIB;sid=4f9a60002e1bb28ae24e27908bfd561f">
              <Text>Contactez nous</Text>
            </a>
          </Element>
        </GroupeElementsOne>
        <GroupeElementsTwo>
          <Element>
            <Text style={{ color: color.base }}>
              Informations complémentaires
            </Text>
            <a href="https://www.airbnb.fr/terms">
              <Text>Termes et Conditions</Text>
            </a>
            <a href="https://www.airbnb.fr/terms/privacy_policy">
              <Text>Politique de confidentialité</Text>
            </a>
          </Element>
          <Element style={{ paddingTop: rem(30) }}>
            <Text style={{ color: color.base }}>Social</Text>
            <Socials>
              <Social icon={"facebook"} />
              <Social icon={"twitter"} />
              <Social icon={"instagram"} />
            </Socials>
          </Element>
        </GroupeElementsTwo>
      </ContentFooter>
    </Footer>
  );
};
