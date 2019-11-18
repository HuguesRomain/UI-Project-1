import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import { size, color, device } from "../styles/const";

const SvgStyle = styled.svg`
  width: ${size.icon};
  height: ${size.icon};
  fill: ${color.base};
`;

const PinStyle = styled.svg`
  width: ${rem(16)};
  fill: ${color.base};
  @media (max-width: ${device.iphoneX}) {
    height: ${rem(21)};
    width: ${rem(16)};
  }
`;

export const Icon = ({ icon }) => {
  return icon === "villa" ? (
    <SvgStyle version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512">
      <g>
        <g>
          <path
            d="M497,272c8.284,0,15-6.716,15-15V75c0-8.284-6.716-15-15-15H383.213L327.606,4.394
			c-5.722-5.723-15.237-5.931-21.169-0.044L250.323,60H151V15c0-8.284-6.716-15-15-15H76c-8.284,0-15,6.716-15,15v45H15
			C6.716,60,0,66.716,0,75v182c0,8.284,6.716,15,15,15h15v150H15c-8.284,0-15,6.716-15,15v60c0,8.284,6.716,15,15,15
			c22.732,0,479.32,0,482,0c8.284,0,15-6.716,15-15v-60c0-8.284-6.716-15-15-15h-15V272H497z M242,201.784L281.342,242H242V201.784z
			 M262.658,180c14.509,0,25.647,0,39.342,0v40.216L262.658,180z M91,30h30v30H91V30z M212,482c-9.295,0-175.564,0-182,0v-30h182
			V482z M212,422H60V272h152V422z M185.349,145.563c5.833,5.882,15.331,5.921,21.213,0.088l5.438-5.393c0,10.32,0,89.869,0,101.742
			H45H30V90c5.923,0,181.243,0,190.073,0l-34.636,34.35C179.555,130.183,179.516,139.681,185.349,145.563z M332,482h-30v-30h30V482z
			 M392,482h-30v-45c0-8.284-6.716-15-15-15h-60c-8.284,0-15,6.716-15,15v45h-30c0-3.296,0-206.83,0-210h150
			C392,275.165,392,478.704,392,482z M332,150h-30v-15c0-8.271,6.729-15,15-15s15,6.729,15,15V150z M371.342,180L332,220.216V180
			C345.966,180,356.303,180,371.342,180z M392,242h-39.342L392,201.784V242z M392,150h-30v-15c0-24.813-20.187-45-45-45
			s-45,20.187-45,45v15h-30v-38.787l75-75l75,75V150z M482,482c-6.569,0-52.366,0-60,0v-30h60V482z M422,422V272h30v150H422z
			 M422,242c0-11.734,0-83.906,0-100.787l4.394,4.394c5.857,5.858,15.356,5.858,21.213,0c5.858-5.858,5.858-15.355,0-21.213
			c-6.429-6.429-26.725-26.725-34.394-34.394H482v152C475.431,242,429.634,242,422,242z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M166,302h-60c-8.284,0-15,6.716-15,15v60c0,8.284,6.716,15,15,15h60c8.284,0,15-6.716,15-15v-60
			C181,308.716,174.284,302,166,302z M151,362h-30v-30h30V362z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M347,302h-60c-8.284,0-15,6.716-15,15v60c0,8.284,6.716,15,15,15h60c8.284,0,15-6.716,15-15v-60
			C362,308.716,355.284,302,347,302z M332,362h-30v-30h30V362z"
          />
        </g>
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </SvgStyle>
  ) : icon === "happy" ? (
    <SvgStyle
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      viewBox="0 0 460.037 460.037"
    >
      <g>
        <circle cx="222.774" cy="74.524" r="41.784" />
        <path
          d="M383.558,334.934c-62.018-77.679-57.517-72.393-60.356-74.715l-28.648-116.49l82.211-111.611
		c6.604-8.965,4.689-21.586-4.276-28.189c-8.963-6.603-21.584-4.69-28.189,4.276l-83.099,112.815
		c-1.18,0.236-50.69,12.272-53.598,13.398L105.735,30.718c-7.801-7.943-20.567-8.057-28.51-0.254
		c-7.943,7.803-8.057,20.568-0.254,28.511l115.745,117.827l15.188,61.757l0,0l16.827,68.421l-9.334,33.042l-81.453-14.417
		c-13.146-2.323-25.711,6.449-28.039,19.607c-2.329,13.157,6.449,25.71,19.606,28.039c111.125,19.669,104.192,18.604,107.238,18.604
		c10.645,0,20.278-7.051,23.262-17.62c23.093-81.754,21.653-76.095,21.993-79.178l9.96-2.449c1.01,1.474-3.133-3.78,45.263,56.838
		l-60.797,70.612c-8.717,10.126-7.576,25.401,2.548,34.119c10.121,8.714,25.398,7.582,34.119-2.548l73.887-85.815
		C390.577,356.998,390.817,344.026,383.558,334.934z"
        />
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </SvgStyle>
  ) : icon === "like" ? (
    <SvgStyle
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      viewBox="0 0 478.2 478.2"
    >
      <g>
        <path
          d="M457.575,325.1c9.8-12.5,14.5-25.9,13.9-39.7c-0.6-15.2-7.4-27.1-13-34.4c6.5-16.2,9-41.7-12.7-61.5
		c-15.9-14.5-42.9-21-80.3-19.2c-26.3,1.2-48.3,6.1-49.2,6.3h-0.1c-5,0.9-10.3,2-15.7,3.2c-0.4-6.4,0.7-22.3,12.5-58.1
		c14-42.6,13.2-75.2-2.6-97c-16.6-22.9-43.1-24.7-50.9-24.7c-7.5,0-14.4,3.1-19.3,8.8c-11.1,12.9-9.8,36.7-8.4,47.7
		c-13.2,35.4-50.2,122.2-81.5,146.3c-0.6,0.4-1.1,0.9-1.6,1.4c-9.2,9.7-15.4,20.2-19.6,29.4c-5.9-3.2-12.6-5-19.8-5h-61
		c-23,0-41.6,18.7-41.6,41.6v162.5c0,23,18.7,41.6,41.6,41.6h61c8.9,0,17.2-2.8,24-7.6l23.5,2.8c3.6,0.5,67.6,8.6,133.3,7.3
		c11.9,0.9,23.1,1.4,33.5,1.4c17.9,0,33.5-1.4,46.5-4.2c30.6-6.5,51.5-19.5,62.1-38.6c8.1-14.6,8.1-29.1,6.8-38.3
		c19.9-18,23.4-37.9,22.7-51.9C461.275,337.1,459.475,330.2,457.575,325.1z M48.275,447.3c-8.1,0-14.6-6.6-14.6-14.6V270.1
		c0-8.1,6.6-14.6,14.6-14.6h61c8.1,0,14.6,6.6,14.6,14.6v162.5c0,8.1-6.6,14.6-14.6,14.6h-61V447.3z M431.975,313.4
		c-4.2,4.4-5,11.1-1.8,16.3c0,0.1,4.1,7.1,4.6,16.7c0.7,13.1-5.6,24.7-18.8,34.6c-4.7,3.6-6.6,9.8-4.6,15.4c0,0.1,4.3,13.3-2.7,25.8
		c-6.7,12-21.6,20.6-44.2,25.4c-18.1,3.9-42.7,4.6-72.9,2.2c-0.4,0-0.9,0-1.4,0c-64.3,1.4-129.3-7-130-7.1h-0.1l-10.1-1.2
		c0.6-2.8,0.9-5.8,0.9-8.8V270.1c0-4.3-0.7-8.5-1.9-12.4c1.8-6.7,6.8-21.6,18.6-34.3c44.9-35.6,88.8-155.7,90.7-160.9
		c0.8-2.1,1-4.4,0.6-6.7c-1.7-11.2-1.1-24.9,1.3-29c5.3,0.1,19.6,1.6,28.2,13.5c10.2,14.1,9.8,39.3-1.2,72.7
		c-16.8,50.9-18.2,77.7-4.9,89.5c6.6,5.9,15.4,6.2,21.8,3.9c6.1-1.4,11.9-2.6,17.4-3.5c0.4-0.1,0.9-0.2,1.3-0.3
		c30.7-6.7,85.7-10.8,104.8,6.6c16.2,14.8,4.7,34.4,3.4,36.5c-3.7,5.6-2.6,12.9,2.4,17.4c0.1,0.1,10.6,10,11.1,23.3
		C444.875,295.3,440.675,304.4,431.975,313.4z"
        />
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </SvgStyle>
  ) : (
    icon === "pin" && (
      <PinStyle
        version="1.1"
        id="Layer_1"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
      >
        <g>
          <g>
            <path
              d="M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035
			c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719
			c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z"
            />
          </g>
        </g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </PinStyle>
    )
  );
};