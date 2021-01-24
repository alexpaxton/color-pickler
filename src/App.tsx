// Libraries
import { FC } from "react";
import { isMobile } from "react-device-detect";

// Components
import ColorPicker from "./components/ColorPicker";
import MobileColorPicker from "./components/mobile/ColorPicker";
import ColorPickerProvider from "./utils/ColorPickerProvider";

// Styles
import { AppContainer, MobileContainer, MobileHeader } from "./App.styles";

const App: FC = () => {
  if (isMobile) {
    return (
      <ColorPickerProvider>
        <MobileContainer>
          <MobileHeader>Color Pickler</MobileHeader>
          <MobileColorPicker />
        </MobileContainer>
      </ColorPickerProvider>
    );
  }

  return (
    <ColorPickerProvider>
      <AppContainer>
        <ColorPicker />
      </AppContainer>
    </ColorPickerProvider>
  );
};

export default App;
