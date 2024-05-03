import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import "../totalcss/theme-toggler-button.css";

export default function ThemeTogglerButton() {
  const {theme, toggleTheme} = useContext(ThemeContext);
  return (
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
  );
}
