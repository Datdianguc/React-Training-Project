import React, {useState, useRef, useEffect} from "react";
import "../totalcss/Input.css";
// import { ThemeContext } from "./ThemeProvider";
export default function InputComponent(props){

  const {onAdd, onEdit, className, placeholder, editItem} = props;
  const inputRef = useRef(null);
  const [input, setInput] = useState("");

  const changeState = (value) => {
    setInput(value);
  };

  const handleChange = (event) => {
    setInput(event.target.value );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editItem.editingID !== null) {
      onEdit(editItem.editingID, input);
      setInput("");
    } else {
      onAdd(input);
      setInput("");
    }
  };

  useEffect(() => {
    if (editItem.editingID !== null && inputRef.current !== null) {
      inputRef.current.focus();
    }
  }, [editItem]);

  // const { theme } = this.context;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={input.input}
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

// Input.contextType = ThemeContext;
