import React, { useContext } from "react";
import "./App.css";
import Header from "./component/Header";
import Workspace from "./component/Workspace";
import Footer from "./component/Footer";
import { ThemeContext } from "./component/ThemeProvider";

export default function App() {
    const {theme} = useContext(ThemeContext);
    return (
      <div style={{ backgroundColor: theme.background }}>
        <div className="container">
          <Header />
          <Workspace />
          <Footer />
        </div>
      </div>
    );
  }




