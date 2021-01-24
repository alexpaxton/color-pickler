// Libraries
import { FC, MouseEvent as ReactMouseEvent, useContext, useRef } from "react";
import { ColorPickerContext } from "../../utils/ColorPickerProvider";

// Styles
import {
  HueSliderContainer,
  HueSliderHandle,
  HueSliderHandleCaret,
} from "./styles";

// Utils
import { HUE_MIN, HUE_MAX } from "utils";

interface HueSliderProps {
  height: number;
}

const HueSlider: FC<HueSliderProps> = ({ height }) => {
  const {
    hsv: { hue },
    handleChangeHsv,
  } = useContext(ColorPickerContext);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleChangeHue = (pageY: number): void => {
    if (!sliderRef.current) {
      return;
    }
    const { top } = sliderRef.current.getBoundingClientRect();
    const sliderY = pageY - top;
    const newHue = Math.abs(
      Math.max(
        Math.min(Math.round((sliderY / height) * HUE_MAX), HUE_MAX),
        HUE_MIN
      ) - HUE_MAX
    );

    handleChangeHsv({ hue: newHue });
  };

  const handleDrag = (e: MouseEvent): void => {
    handleChangeHue(e.pageY);
  };

  const handleStartDrag = (e: ReactMouseEvent<HTMLDivElement>): void => {
    handleChangeHue(e.pageY);
    window.addEventListener("mousemove", handleDrag);
    window.addEventListener("mouseup", handleStopDrag);
  };

  const handleStopDrag = (): void => {
    window.removeEventListener("mousemove", handleDrag);
    window.removeEventListener("mouseup", handleStopDrag);
  };

  return (
    <HueSliderContainer
      height={height}
      onMouseDown={handleStartDrag}
      ref={sliderRef}
    >
      <HueSliderHandle hue={hue}>
        <HueSliderHandleCaret />
        <HueSliderHandleCaret />
      </HueSliderHandle>
    </HueSliderContainer>
  );
};

export default HueSlider;
