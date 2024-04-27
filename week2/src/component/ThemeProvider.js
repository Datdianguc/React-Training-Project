import React, {useState} from "react";
import { produce } from "immer";

export const themes = {
  light: {
    background: "#f5f5f5",
    background2: "#fff",
    backgroundToggler: "#fff",
    backgroundButton: "#fff",
    color: "#000",
    colorHeader: "#b83f45",
    border: "none",
  },
  dark: {
    background: "#0C134F",
    background2: "#1D267D",
    backgroundToggler: "#5C469C",
    backgroundButton: "#5C469C",
    color: "#D4ADFC",
    colorHeader: "#D4ADFC",
    border: "none",
  },
};

export const ThemeContext = React.createContext({
  theme: themes.light,
  toggleTheme: () => null,
});

export default function ThemeProvider(props) {
  const { children } = props;
  const [theme, setTheme] = useState(themes.light);
  // this.state = {
  //   theme: themes.light,
  // };

  const toggleTheme = () => {
    setTheme((prevState) =>
      produce(prevState, (draftState) => {
        draftState.theme =
          prevState.theme === themes.dark ? themes.light : themes.dark;
        document.body.style.setProperty(
          "background-color",
          draftState.theme.background,
          "important"
        );
      })
    );
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme: toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
