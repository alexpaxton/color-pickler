// Libraries
import { FC, createContext, useState, useCallback } from "react";
import chroma from "chroma-js";

// Utils
import { HSVToRGB } from "./index";

// Types
import { HSVColor, RGBColor } from "../types";

interface ColorPickerContextType {
  hsv: HSVColor;
  rgb: RGBColor;
  hex: string;
  handleChangeHsv: (property: Partial<HSVColor>) => void;
}

const ExampleHSVColor: HSVColor = {
  hue: 260,
  saturation: 0.78,
  value: 0.86,
};

const ExampleRGBColor = HSVToRGB(ExampleHSVColor);

const ExampleHexColor = chroma
  .hsv(ExampleHSVColor.hue, ExampleHSVColor.saturation, ExampleHSVColor.value)
  .hex();

const colorPickerContextDefault = {
  hsv: ExampleHSVColor,
  rgb: ExampleRGBColor,
  hex: ExampleHexColor,
  handleChangeHsv: () => {},
};

export const ColorPickerContext = createContext<ColorPickerContextType>(
  colorPickerContextDefault
);

const ColorPickerProvider: FC = ({ children }) => {
  const [hsv, setHsv] = useState<HSVColor>(ExampleHSVColor);

  const handleChangeHsv = useCallback(
    (property: Partial<HSVColor>): void => {
      setHsv({ ...hsv, ...property });
    },
    [hsv]
  );

  const hex = chroma.hsv(hsv.hue, hsv.saturation, hsv.value).hex();

  return (
    <ColorPickerContext.Provider
      value={{
        hsv,
        rgb: HSVToRGB(hsv),
        hex,
        handleChangeHsv,
      }}
    >
      {children}
    </ColorPickerContext.Provider>
  );
};

export default ColorPickerProvider;
