import { createContext } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../style/global";
import { getTheme, ThemeName } from "../style/theme";

const DEFAULT_THEME_NAME = "origin";

interface State {
  themeName: ThemeName;
}

export const state = {
  themeName: DEFAULT_THEME_NAME as ThemeName,
};

export const ThemeContext = createContext<State>(state);

const CleanUpThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContext.Provider value={state}>
      <ThemeProvider theme={getTheme()}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default CleanUpThemeProvider;
