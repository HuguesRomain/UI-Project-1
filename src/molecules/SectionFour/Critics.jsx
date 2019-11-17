import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import { Stars } from "../../atoms/Stars";

const Pics = styled.img`
  width: ${rem(50)};
`;

const Infos = styled.div``;

const Title = styled.p``;

const Descrition = styled.p``;

export const Critics = ({ pics, title, description, number }) => {
  return (
    <>
      <Pics src={pics} />
      <Infos>
        <Title>{title}</Title>
        <Descrition>{description}</Descrition>
        <Stars number={number} />
      </Infos>
    </>
  );
};
