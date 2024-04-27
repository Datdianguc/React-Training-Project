import React from "react";
import "../totalcss/filterbutton.css";
// import { ThemeContext } from "./ThemeProvider";

export default function FilterButton(props){

    const { onClick, name } = props;
    // const { theme } = context;
    return (
      <button
        onClick={onClick}
        // style={{
        //   color: theme.color,
        //   border: theme.border,
        //   backgroundColor: theme.backgroundButton,
        // }}
      >
        {name}
      </button>
    );
  }


// FilterButton.contextType = ThemeContext;
