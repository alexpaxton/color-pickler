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
import { HueToHex, clampSaturation, clampValue } from "utils";

const MatrixSlider: FC = () => {
  const {
    hex,
    hsv: { hue, saturation, value },
    handleChangeHsv,
  } = useContext(ColorPickerContext);
  const matrixRef = useRef<HTMLDivElement>(null);
  const [isDragging, setDragging] = useState<boolean>(false);

  const matrixRect = matrixRef.current?.getBoundingClientRect();

  const updatePosition = (eventX: number, eventY: number): void => {
    if (!matrixRect) {
      return;
    }

    const { left, top, width, height } = matrixRect;

    const panX = eventX - left;
    const panY = eventY - top;

    handleChangeHsv({
      saturation: clampSaturation(parseFloat((panX / width).toFixed(2))),
      value: clampValue(1 - parseFloat((panY / height).toFixed(2))),
    });
  };

  const handlePanStart = (e: any): void => {
    setDragging(true);
    updatePosition(e.center.x, e.center.y);
  };

  const handlePanEnd = (): void => {
    setDragging(false);
  };

  const handlePan = (e: any): void => {
    updatePosition(e.center.x, e.center.y);
  };

  const handleTap = (e: any): void => {
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
