import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { FormRegister } from "./components/FormRegister";
import { GlobalStyles } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <FormRegister />
    </ThemeProvider>
  );
}
