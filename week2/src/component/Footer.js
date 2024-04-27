import React from "react";
import "../totalcss/Footer.css";
// import { ThemeContext } from "./ThemeProvider";
export default function Footer(){
    // const { theme } = this.context;
    return (
      <div className="Footer" /*style={{ color: theme.color }}*/>
        <p>Double-click to edit a Todo</p>
        <p>Created by the TodoMVC team</p>
        <p>
          Part of{" "}
          <a /*style={{ color: theme.color }}*/ href="http://todomvc.com">
            TodoMVC
          </a>
        </p>
      </div>
    );
  }


// Footer.contextType = ThemeContext;
