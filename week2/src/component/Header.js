import React, {useContext} from "react";
import "../totalcss/Header.css";
import { ThemeContext } from "./ThemeProvider";
export default function Header() {
    const { theme } = useContext(ThemeContext);
    return ( <h1 style={{ color: theme.colorHeader }}>todos</h1> );
  }

