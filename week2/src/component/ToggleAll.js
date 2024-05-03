import React, { useContext } from "react";

import { ThemeContext } from "./ThemeProvider";

export default function ToggleAll(props) {
  const { onClick, name } = props;
  const { theme } = useContext(ThemeContext);
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
