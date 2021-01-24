import styled from "@emotion/styled";
import { hueToPercent } from "../../utils";

interface HueSliderContainerProps {
  height: number;
}

export const HueSliderContainer = styled.div<HueSliderContainerProps>`
  width: 30px;
  height: ${(props) => props.height}px;
  position: relative;
  border-radius: 3px;
  background: linear-gradient(
    0deg,
    rgba(255, 0, 0, 1) 0%,
    rgba(255, 255, 0, 1) 16.6667%,
    rgba(0, 255, 0, 1) 33.3333%,
    rgba(0, 255, 255, 1) 50%,
    rgba(0, 0, 255, 1) 66.6667%,
    rgba(255, 0, 255, 1) 83.3333%,
    rgba(255, 0, 0, 1) 100%
  );

  &:hover {
    cursor: crosshair;
  }
`;

interface HueSliderHandleProps {
  hue: number;
}

export const HueSliderHandle = styled.div<HueSliderHandleProps>`
  position: absolute;
  left: 0;
  bottom: ${(props) => hueToPercent(props.hue)}%;
  transform: translateY(50%);
  width: 100%;
  height: 2px;
  background-color: #fff;
  pointer-events: none;
`;

export const HueSliderHandleCaret = styled.div`
  position: absolute;
  border: 6px solid transparent;
  top: 50%;

  &:first-of-type {
    left: 0;
    border-left-color: #fff;
    transform: translate(-45%, -50%);
  }

  &:last-of-type {
    right: 0;
    border-right-color: #fff;
    transform: translate(45%, -50%);
  }
`;
