import React from "react";
import "../totalcss/filterbutton.css";
import { ThemeContext } from "./ThemeProvider";

export default class FilterButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { onClick, name } = this.props;
    const { theme } = this.context;
    return (
      <button
        onClick={onClick}
        style={{
          color: theme.color,
          border: theme.border,
          backgroundColor: theme.backgroundButton,
        }}
      >
        {name}
      </button>
    );
  }
}

FilterButton.contextType = ThemeContext;
