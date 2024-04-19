import React from "react";
import { ThemeContext } from "./ThemeProvider";

export default class ThemeTogglerButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
          <button
            onClick={toggleTheme}
            style={{ backgroundColor: theme.background }}
          >
            Toggle Theme
          </button>
        )}
      </ThemeContext.Consumer>
    );
  }
}

