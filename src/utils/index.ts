import chroma from "chroma-js";

import { RGBColor, HSVColor } from "../types";

export const HUE_MIN = 0;
export const HUE_MAX = 359;
export const SATURATION_MIN = 0;
export const SATURATION_MAX = 1;
export const VALUE_MIN = 0;
export const VALUE_MAX = 1;

export const hueToPercent = (hue: number): number => {
  return (hue / HUE_MAX) * 100;
};

export const RGBToHex = ({ red, green, blue }: RGBColor): string => {
  return chroma.rgb(red, green, blue).hex();
};

export const hexToRGB = (hex: string): RGBColor => {
  const color = chroma(hex).rgb();

  return {
    red: color[0],
    green: color[1],
    blue: color[2],
  };
};

export const RGBToHSV = ({ red, green, blue }: RGBColor): HSVColor => {
  const color = chroma.rgb(red, green, blue).hsv();

  return {
    hue: Math.round(color[0]),
    saturation: color[1],
    value: color[2],
  };
};

export const HSVToRGB = ({ hue, saturation, value }: HSVColor): RGBColor => {
  const color = chroma.hsv(hue, saturation, value).rgb();

  return {
    red: color[0],
    green: color[1],
    blue: color[2],
  };
};

export const HueToHex = (hue: number): string => {
  let red = 0,
    green = 0,
    blue = 0;

  if (hue < 60) {
    // Red - Yellow
    red = 255;
    green = Math.round((hue / 60) * 255);
    blue = 0;
  } else if (hue < 120) {
    // Yellow - Green
    red = 255 - Math.round(((hue - 60) / 60) * 255);
    green = 255;
    blue = 0;
  } else if (hue < 180) {
    // Green - Cyan
    red = 0;
    green = 255;
    blue = Math.round(((hue - 120) / 60) * 255);
  } else if (hue < 240) {
    // Cyan - Blue
    red = 0;
    green = 255 - Math.round(((hue - 180) / 60) * 255);
    blue = 255;
  } else if (hue < 300) {
    // Blue - Violet
    red = Math.round(((hue - 240) / 60) * 255);
    green = 0;
    blue = 255;
  } else {
    // Violet - Red
    red = 255;
    green = 0;
    blue = 255 - Math.round(((hue - 300) / 60) * 255);
  }

  return RGBToHex({ red, green, blue });
};
