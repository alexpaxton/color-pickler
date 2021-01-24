// Libraries
import { FC } from "react";

// Components
import HueSlider from "../HueSlider";
import MatrixSlider from "../MatrixSlider";
import Figures from "../Figures";

// Styles
import { ColorPickerContainer } from "./styles";

const ColorPicker: FC = () => {
  return (
    <ColorPickerContainer>
      <MatrixSlider size={360} />
      <HueSlider height={360} />
      <Figures height={360} />
    </ColorPickerContainer>
  );
};

export default ColorPicker;
