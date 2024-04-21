import React from "react";
import { ThemeContext } from "./ThemeProvider";
import "../totalcss/theme-toggler-button.css";

export default class ThemeTogglerButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
          <button
            className="Toggle-button"
            onClick={toggleTheme}
            style={{
              backgroundColor: theme.backgroundToggler,
              border: theme.border,
              color: theme.color,
            }}
          >
            Toggle Theme
          </button>
        )}
      </ThemeContext.Consumer>
    );
  }
}
