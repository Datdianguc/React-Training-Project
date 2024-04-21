import React from "react";
import { ThemeContext } from "./ThemeProvider";

export default class ToggleAll extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { onClick, name } = this.props;
    const { theme } = this.context;
    return (
      <div>
        <button
          style={{ backgroundColor: theme.background2, border: theme.border }}
          onClick={onClick}
        >
          {name}
        </button>
      </div>
    );
  }
}

ToggleAll.contextType = ThemeContext;
