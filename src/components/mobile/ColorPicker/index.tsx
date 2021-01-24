// Libraries
import { FC } from "react";

// Components
import HueSlider from "../HueSlider";
import MatrixSlider from "../MatrixSlider";
import Figures from "../Figures";

const MobileColorPicker: FC = () => {
  return (
    <>
      <Figures />
      <MatrixSlider />
      <HueSlider />
    </>
  );
};

export default MobileColorPicker;
