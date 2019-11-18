import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import { font, color } from "./styles/const";

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${rem(200)};
  font-family: ${font.fontFamily};
  font-weight: ${font.heavy};
  color: ${color.text};
`;

const ContentFooter = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${rem(550)};
  margin: 0 ${rem(200)} 0 0;
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

export const SectionSeven = () => {
  return (
    <Footer>
      <ContentFooter>
        <Element>
          <Text style={{ color: color.base }}>Clients</Text>
          <Text>Acheteurs</Text>
          <Text>Fournisseur</Text>
        </Element>
        <Element style={{ height: rem(100) }}>
          <Text style={{ color: color.base }}>Entreprise</Text>
          <Text>About us</Text>
          <Text>Carrière</Text>
          <Text>Contactez nous</Text>
        </Element>
        <Element>
          <Text style={{ color: color.base }}>
            Informations complémentaires
          </Text>
          <Text>Termes et Conditions</Text>
          <Text>Politique de confidentialité</Text>
        </Element>
      </ContentFooter>
    </Footer>
  );
};
