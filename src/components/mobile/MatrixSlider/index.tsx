// Libraries
import { FC, useState, useContext, useRef } from "react";
import Hammer from "react-hammerjs";
import { ColorPickerContext } from "../../../utils/ColorPickerProvider";

// Styles
import {
  MatrixSliderContainer,
  MatrixSliderDragArea,
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
  const [isDragging, setDragging] = useState<boolean>(false);

  const updatePosition = (eventX: number, eventY: number): void => {
    if (!matrixRef.current) {
      return;
    }

    const {
      left,
      top,
      width,
      height,
    } = matrixRef.current.getBoundingClientRect();
    const clampedX = Math.max(0, Math.min(eventX - left, width));
    const clampedY = Math.max(0, Math.min(eventY - top, height));

    const newSaturation = parseFloat((clampedX / width).toFixed(2));
    const newValue = 1 - parseFloat((clampedY / height).toFixed(2));

    handleChangeHsv({ saturation: newSaturation, value: newValue });
  };

  const handlePanStart = (e: any): void => {
    console.log("pan start");
    setDragging(true);
    updatePosition(e.center.x, e.center.y);
  };

  const handlePanEnd = (): void => {
    console.log("pan end");
    setDragging(false);
  };

  const handlePan = (e: any): void => {
    console.log("pan");
    updatePosition(e.center.x, e.center.y);
  };

  const handleTap = (e: any): void => {
    console.log("tap");
    updatePosition(e.center.x, e.center.y);
  };

  const x = saturation * 100;
  const y = value * 100;

  return (
    <MatrixSliderContainer ref={matrixRef}>
      <Hammer
        onTap={handleTap}
        onPanStart={handlePanStart}
        onPanEnd={handlePanEnd}
        onPan={handlePan}
      >
        <MatrixSliderDragArea color={HueToHex(hue)}>
          <MatrixSliderHandle x={x} y={y} hex={hex} isDragging={isDragging} />
          <MatrixSliderWhiteGradient />
          <MatrixSliderBlackGradient />
        </MatrixSliderDragArea>
      </Hammer>
    </MatrixSliderContainer>
  );
};

export default MatrixSlider;
