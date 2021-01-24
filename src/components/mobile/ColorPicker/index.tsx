// Libraries
import { FC } from "react";

// Components
import HueSlider from "../HueSlider";
import MatrixSlider from "../MatrixSlider";

const MobileColorPicker: FC = () => {
  return (
    <>
      <MatrixSlider size={100} />
      <HueSlider />
    </>
  );
};

export default MobileColorPicker;
