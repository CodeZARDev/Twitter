import * as React from 'react';
import Fonts from '../utils/fonts';
import Theme, { DarkTheme, LightTheme } from '../utils/theme';

interface ThemedContextData {
  fonts: typeof Fonts;
  isDarkMode: boolean;
  toggleDarkMode(): void;
  activeTheme: typeof DarkTheme | typeof LightTheme;
  twitterColors: typeof Theme
  light: typeof LightTheme;
  dark: typeof DarkTheme;
}

const ThemedContext = React.createContext({} as ThemedContextData);

export const ThemeProvider: React.FC = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false);
  return(
    <ThemedContext.Provider value={{
      fonts: Fonts,
      isDarkMode,
      toggleDarkMode: () => setIsDarkMode(!isDarkMode),
      activeTheme: isDarkMode ? DarkTheme : LightTheme,
      twitterColors: Theme,
      light: LightTheme,
      dark: DarkTheme,
    }}>
      {children}
    </ThemedContext.Provider>
  )
}

export const useThemedContext = () => {
  const data = React.useContext(ThemedContext);
  return data;
}
