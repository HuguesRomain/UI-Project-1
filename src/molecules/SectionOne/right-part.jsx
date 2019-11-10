import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import { color, size, font } from "../../styles/const";

const RightPartElements = styled.div`
  display: flex;
  align-items: center;
  width: ${rem(800)};
  transform: translateX(-50px);
`;

const RightPartContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: ${rem(180)};
  margin: 0 0 0 ${rem(50)};
`;

const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${rem(90)};
`;

const Title = styled.h1`
  font-family: ${font.fontFamily};
  font-weight: ${font.bolder};
  color: ${color.whitetext};
  font-size: ${size.bigTitle};
  width: ${rem(400)};
`;

const Description = styled.p`
  font-family: ${font.fontFamily};
  font-weight: ${font.medium};
  color: ${color.whitetext};
  width: ${rem(370)};
`;

const SearchBar = styled.input`
  border: 0;
  width: ${rem(250)};
  padding: ${rem(13)} 0;
  border-radius: 3px;
`;

export const RightPart = () => {
  return (
    <RightPartElements>
      <RightPartContent>
        <ContentText>
          <Title>Les meilleurs moment métitent les meilleurs logement.</Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </Description>
        </ContentText>
        <SearchBar placeholder="&#xF002; Search" />
      </RightPartContent>
    </RightPartElements>
  );
};
