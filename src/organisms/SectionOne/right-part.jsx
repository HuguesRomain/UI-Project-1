import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import { color, size, font, device } from "../../styles/const";

const RightPartElements = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  transform: translateX(-50px);
`;

const RightPartContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  margin: 0 0 0 ${rem(50)};
  padding: ${rem(20)} 0;
  @media (max-width: ${device.iphoneX}) {
    margin: ${rem(15)} 0 0 ${rem(55)};
  }
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
  font-size: ${size.veryBigText};
`;

const Description = styled.p`
  font-family: ${font.fontFamily};
  font-weight: ${font.medium};
  font-size: ${size.mediumText};
  color: ${color.whitetext};
  width: ${rem(370)};
  padding: ${rem(10)} 0;
`;

const SearchBar = styled.textarea`
  border: 0;
  width: ${rem(250)};
  padding: ${rem(5)} 0;
  border-radius: 3px;
  resize: none;
  font-family: ${font.fontFamily};
  margin: ${rem(100)} 0 0 0;
  ::placeholder {
    text-align: center;
    width: ${rem(210)};
    line-height: 40px;
    color: ${color.textInput};
  }
  @media (max-width: ${device.iphoneX}) {
    margin: ${rem(40)} 0 ${rem(40)} 0;
  }
`;

export const RightPart = () => {
  return (
    <RightPartElements>
      <RightPartContent>
        <ContentText>
          <Title>Les meilleurs moments méritent les meilleurs logements.</Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </Description>
        </ContentText>
        <SearchBar placeholder={"Los Angeles, Torronto, Melun…"} />
      </RightPartContent>
    </RightPartElements>
  );
};
