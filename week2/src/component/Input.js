import React, { useState, useContext } from "react";
import "../totalcss/Input.css";
// import { ThemeContext } from "./ThemeProvider";
export default function InputComponent(props) {
  const {
    onSubmit,
    className,
    placeholder,
    editItem,
    inputRef,
  } = props;

  // const [theme] = {ThemeContext};

  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(input);
    setInput("");
  };

  // const { theme } = this.context;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          className={className}
          placeholder={placeholder}
          onChange={handleChange}
          ref={inputRef}
          editItem={editItem}
          // style={{ color: theme.color }}
        />
      </form>
    </div>
  );
}

// InputComponent.contextType = ThemeContext;