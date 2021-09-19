import React, { ReactElement, ReactChildren, useState, useEffect } from "react";
import Theme from "./themes";

const initialState = {
  dark: false,
  theme: Theme.dark,
  toggle: () => {},
};
const ThemeContext = React.createContext(initialState);
export default function ThemeProvider({ children }: any): ReactElement {
  const [dark, setDark] = useState<boolean | undefined>(true);
  useEffect(() => {
    const isDark: boolean = localStorage.getItem("dark") === "true";
    setDark(isDark);
  }, [dark]);

  // To toggle between dark and light modes
  const toggle = () => {
    const isDark = !dark;
    localStorage.setItem("dark", JSON.stringify(isDark));
    setDark(isDark);
  };

  const theme = dark ? Theme.dark : Theme.light;
  return (
    <ThemeContext.Provider value={{ theme, dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export  {ThemeContext, ThemeProvider}
