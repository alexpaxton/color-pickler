// Libraries
import { FC, useContext } from "react";

// Components
import { ColorPickerContext } from "../../utils/ColorPickerProvider";

// Styles
import {
  FiguresContainer,
  FiguresSwatch,
  FiguresSection,
  FiguresRow,
  FiguresLabel,
  FiguresValue,
} from "./styles";

interface FiguresProps {
  height: number;
}

const Figures: FC<FiguresProps> = ({ height }) => {
  const { hsv, rgb, hex } = useContext(ColorPickerContext);
  return (
    <FiguresContainer height={height}>
      <FiguresSwatch hex={hex} />
      <FiguresSection>
        <FiguresRow>
          <FiguresLabel>Hue</FiguresLabel>
          <FiguresValue>{hsv.hue}&deg;</FiguresValue>
        </FiguresRow>
        <FiguresRow>
          <FiguresLabel>Saturation</FiguresLabel>
          <FiguresValue>{Math.round(hsv.saturation * 100)}</FiguresValue>
        </FiguresRow>
        <FiguresRow>
          <FiguresLabel>Value</FiguresLabel>
          <FiguresValue>{Math.round(hsv.value * 100)}</FiguresValue>
        </FiguresRow>
      </FiguresSection>
      <FiguresSection>
        <FiguresRow>
          <FiguresLabel>Red</FiguresLabel>
          <FiguresValue>{rgb.red}</FiguresValue>
        </FiguresRow>
        <FiguresRow>
          <FiguresLabel>Green</FiguresLabel>
          <FiguresValue>{rgb.green}</FiguresValue>
        </FiguresRow>
        <FiguresRow>
          <FiguresLabel>Blue</FiguresLabel>
          <FiguresValue>{rgb.blue}</FiguresValue>
        </FiguresRow>
      </FiguresSection>
      <FiguresSection>
        <FiguresRow>
          <FiguresLabel>Hex</FiguresLabel>
          <FiguresValue>{hex}</FiguresValue>
        </FiguresRow>
      </FiguresSection>
    </FiguresContainer>
  );
};

export default Figures;
