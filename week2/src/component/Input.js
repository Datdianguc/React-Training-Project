import React, { useState, useContext } from "react";
import "../totalcss/Input.css";
import { ThemeContext } from "./ThemeProvider";
export default function InputComponent(props) {
  const { onSubmit, className, placeholder, inputRef } = props;

  const {theme} = useContext(ThemeContext);

  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(input);
    setInput("");
  };

  return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            value={input}
            className={className}
            placeholder={placeholder}
            onChange={handleChange}
            ref={inputRef}
            style={{ color: theme.color }}
          />
        </form>
      </div>
  );
}
