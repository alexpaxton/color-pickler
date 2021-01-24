import styled from "@emotion/styled";
import { hueToPercent } from "../../../utils";

export const HueSliderContainer = styled.div`
  width: 100%;
  height: 30px;
  flex: 0 0 30px;
`;

export const HueSliderGradient = styled.div`
  width: 100%;
  height: 44px;
  position: relative;
  border-radius: 3px;
  background: linear-gradient(
    90deg,
    rgba(255, 0, 0, 1) 0%,
    rgba(255, 255, 0, 1) 16.6667%,
    rgba(0, 255, 0, 1) 33.3333%,
    rgba(0, 255, 255, 1) 50%,
    rgba(0, 0, 255, 1) 66.6667%,
    rgba(255, 0, 255, 1) 83.3333%,
    rgba(255, 0, 0, 1) 100%
  );
`;

interface HueSliderHandleProps {
  hue: number;
  isDragging?: boolean;
}

export const HueSliderHandle = styled.div<HueSliderHandleProps>`
  position: absolute;
  top: 50%;
  right: ${(props) => hueToPercent(props.hue)}%;
  transform: ${(props) =>
    props.isDragging
      ? "translate(50%, -50%) scale(2)"
      : "translate(50%, -50%)"};
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #fff;
  pointer-events: none;
  transition: ${(props) =>
    props.isDragging
      ? "transform 0.3s ease"
      : "transform 0.3s ease, right 0.2s cubic-bezier(0.87, 0, 0.13, 1)"};
`;
