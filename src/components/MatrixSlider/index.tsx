// Libraries
import { FC, MouseEvent as ReactMouseEvent, useContext, useRef } from "react";
import { ColorPickerContext } from "../../utils/ColorPickerProvider";

// Styles
import {
  MatrixSliderContainer,
  MatrixSliderHandle,
  MatrixSliderBlackGradient,
  MatrixSliderWhiteGradient,
} from "./styles";

// Utils
import { HueToHex } from "utils";

interface MatrixSliderProps {
  size: number;
}

const MatrixSlider: FC<MatrixSliderProps> = ({ size }) => {
  const {
    hex,
    hsv: { hue, saturation, value },
    handleChangeHsv,
  } = useContext(ColorPickerContext);
  const matrixRef = useRef<HTMLDivElement>(null);

  const handleChange = (pageX: number, pageY: number): void => {
    if (!matrixRef.current) {
      return;
    }

    const { top, left } = matrixRef.current.getBoundingClientRect();
    const matrixX = Math.min(Math.max(pageX - left, 0), size);
    const matrixY = size - Math.min(Math.max(pageY - top, 0), size);

    const newSaturation = parseFloat((matrixX / size).toFixed(2));
    const newValue = parseFloat((matrixY / size).toFixed(2));

    handleChangeHsv({ saturation: newSaturation, value: newValue });
  };

  const handleDrag = ({ pageX, pageY }: MouseEvent): void => {
    handleChange(pageX, pageY);
  };

  const handleStartDrag = ({
    pageX,
    pageY,
  }: ReactMouseEvent<HTMLDivElement>): void => {
    handleChange(pageX, pageY);
    window.addEventListener("mousemove", handleDrag);
    window.addEventListener("mouseup", handleStopDrag);
  };

  const handleStopDrag = (): void => {
    window.removeEventListener("mousemove", handleDrag);
    window.removeEventListener("mouseup", handleStopDrag);
  };

  const x = saturation * 100;
  const y = value * 100;

  return (
    <MatrixSliderContainer
      color={HueToHex(hue)}
      size={size}
      onMouseDown={handleStartDrag}
      ref={matrixRef}
    >
      <MatrixSliderHandle x={x} y={y} hex={hex} />
      <MatrixSliderWhiteGradient />
      <MatrixSliderBlackGradient />
    </MatrixSliderContainer>
  );
};

export default MatrixSlider;
