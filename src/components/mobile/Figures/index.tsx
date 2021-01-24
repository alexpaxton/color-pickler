// Libraries
import { FC, useContext } from "react";
import chroma from "chroma-js";

// Components
import { ColorPickerContext } from "../../../utils/ColorPickerProvider";

// Styles
import {
  FiguresContainer,
  FiguresSwatch,
  FiguresSection,
  FiguresRow,
  FiguresLabel,
  FiguresValue,
} from "./styles";

const Figures: FC = () => {
  const { hsv, rgb, hex } = useContext(ColorPickerContext);

  const useDarkText = (): boolean => {
    return chroma.contrast(hex, "#000") >= chroma.contrast(hex, "#fff");
  };

  return (
    <FiguresContainer>
      <FiguresSection>
        <FiguresRow>
          <FiguresLabel>H</FiguresLabel>
          <FiguresValue>{hsv.hue}&deg;</FiguresValue>
        </FiguresRow>
        <FiguresRow>
          <FiguresLabel>S</FiguresLabel>
          <FiguresValue>{Math.round(hsv.saturation * 100)}</FiguresValue>
        </FiguresRow>
        <FiguresRow>
          <FiguresLabel>V</FiguresLabel>
          <FiguresValue>{Math.round(hsv.value * 100)}</FiguresValue>
        </FiguresRow>
      </FiguresSection>
      <FiguresSwatch useDarkText={useDarkText()} hex={hex}>
        {hex}
      </FiguresSwatch>
      <FiguresSection>
        <FiguresRow>
          <FiguresLabel>R</FiguresLabel>
          <FiguresValue>{rgb.red}</FiguresValue>
        </FiguresRow>
        <FiguresRow>
          <FiguresLabel>G</FiguresLabel>
          <FiguresValue>{rgb.green}</FiguresValue>
        </FiguresRow>
        <FiguresRow>
          <FiguresLabel>B</FiguresLabel>
          <FiguresValue>{rgb.blue}</FiguresValue>
        </FiguresRow>
      </FiguresSection>
    </FiguresContainer>
  );
};

export default Figures;
