import ColorModeContextProvider from "./store/color-mode-context";
import AppBar from "./components/AppBar";

export default function App() {
  return (
    <ColorModeContextProvider>
      <AppBar />
    </ColorModeContextProvider>
  );
}
