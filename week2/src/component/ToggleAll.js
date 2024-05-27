import React, { useContext } from "react";

import { ThemeContext } from "./ThemeProvider";
import { useDispatch } from "react-redux";
import action_type from "../redux/Action/ACTION_TYPE";

export default function ToggleAll(props) {
  const { name } = props;
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <button
        style={{ backgroundColor: theme.background2, border: theme.border }}
        onClick={() => dispatch({type: action_type.TOGGLE_ALL})}
      >
        {name}
      </button>
    </div>
  );
}
