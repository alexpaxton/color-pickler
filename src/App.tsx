// Libraries
import { FC } from "react";

// Components
import ColorPicker from "./components/ColorPicker";
import ColorPickerProvider from "./utils/ColorPickerProvider";

// Styles
import { AppContainer } from "./App.styles";

const App: FC = () => {
  return (
    <ColorPickerProvider>
      <AppContainer>
        <ColorPicker />
      </AppContainer>
    </ColorPickerProvider>
  );
};

export default App;
