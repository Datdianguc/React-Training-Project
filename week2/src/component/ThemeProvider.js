import React from "react";
import { produce } from "immer";

export const themes = {
  light: {
    background: "#f5f5f5",
    background2: "#fff",
    backgroundToggler: "#fff",
    backgroundButton:"#fff",
    color: "#000",
    colorHeader: "#b83f45",
    border: "none",
  },
  dark: {
    background: "#0C134F",
    background2: "#1D267D",
    backgroundToggler: "#5C469C",
    backgroundButton:"#5C469C",
    color: "#D4ADFC",
    colorHeader: "#D4ADFC",
    border: "none",
  },
};

export const ThemeContext = React.createContext({
  theme: themes.light,
  toggleTheme: () => null,
});

export default class ThemeProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };
  }
  toggleTheme = () => {
    this.setState((prevState) =>
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
  render() {
    const { children } = this.props;
    const { theme } = this.state;
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme: this.toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  }
}
