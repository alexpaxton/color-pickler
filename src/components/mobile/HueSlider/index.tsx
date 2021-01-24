// Libraries
import { FC, useContext, useRef, useState } from "react";
import Hammer from "react-hammerjs";
import { ColorPickerContext } from "../../../utils/ColorPickerProvider";

// Styles
import {
  HueSliderContainer,
  HueSliderGradient,
  HueSliderHandle,
} from "./styles";

// Utils
import { HUE_MIN, HUE_MAX } from "utils";

const HueSlider: FC = () => {
  const {
    hsv: { hue },
    handleChangeHsv,
  } = useContext(ColorPickerContext);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setDragging] = useState<boolean>(false);

  const updatePosition = (eventX: number): void => {
    if (!sliderRef.current) {
      return;
    }

    const { left, width } = sliderRef.current.getBoundingClientRect();
    const clampedX = Math.max(0, Math.min(eventX - left, width));
    const newHue = Math.abs(
      Math.max(
        Math.min(Math.round((clampedX / width) * HUE_MAX), HUE_MAX),
        HUE_MIN
      )
    );

    handleChangeHsv({ hue: newHue });
  };

  const handlePanStart = (e: any): void => {
    setDragging(true);
    updatePosition(e.center.x);
  };

  const handlePanEnd = (): void => {
    setDragging(false);
  };

  const handlePan = (e: any): void => {
    updatePosition(e.center.x);
  };

  const handleTap = (e: any): void => {
    updatePosition(e.center.x);
  };

  return (
    <HueSliderContainer ref={sliderRef}>
      <Hammer
        onTap={handleTap}
        onPanStart={handlePanStart}
        onPanEnd={handlePanEnd}
        onPan={handlePan}
      >
        <HueSliderGradient>
          <HueSliderHandle hue={hue} isDragging={isDragging} />
        </HueSliderGradient>
      </Hammer>
    </HueSliderContainer>
  );
};

export default HueSlider;
