import styled from "@emotion/styled";

interface MatrixSliderContainerProps {
  color: string;
  size: number;
}

export const MatrixSliderContainer = styled.div<MatrixSliderContainerProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  position: relative;
  background-color: ${(props) => props.color};
  border-radius: 3px;

  &:hover {
    cursor: crosshair;
  }
`;

interface MatrixSliderHandleProps {
  hex: string;
  x: number;
  y: number;
}

export const MatrixSliderHandle = styled.div<MatrixSliderHandleProps>`
  pointer-events: none;
  top: ${(props) => 100 - props.y}%;
  left: ${(props) => props.x}%;
  z-index: 10;
  position: absolute;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  height: 18px;
  width: 18px;
  border: 2px solid #fff;
  background-color: ${(props) => props.hex};
`;

export const MatrixSliderWhiteGradient = styled.div`
  pointer-events: none;
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  border-radius: 3px;
`;

export const MatrixSliderBlackGradient = styled.div`
  pointer-events: none;
  z-index: 2;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
  border-radius: 3px;
`;
