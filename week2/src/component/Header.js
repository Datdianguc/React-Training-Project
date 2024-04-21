import React from "react";
import "../totalcss/Header.css";
import { ThemeContext } from "./ThemeProvider";
class Header extends React.Component {
  render() {
    const { theme } = this.context;
    return <h1 style={{ color: theme.colorHeader }}>todos</h1>;
  }
}

export default Header;

Header.contextType = ThemeContext;
