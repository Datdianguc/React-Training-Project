import React from "react";
import { produce } from "immer";
export const themes = {
  light: {
    foreground: "#000000",
    background: "#f5f5f5",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => null,
});

export default class ThemeProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.dark,
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
