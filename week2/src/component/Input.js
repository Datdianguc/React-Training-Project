import React from "react";
import "../totalcss/Input.css";
import { ThemeContext } from "./ThemeProvider";
class Input extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      input: "",
      item: {},
    };
  }

  changeState = (input) => {
    this.setState({ input });
  };

  handleChange = (event) => {
    this.setState({ input: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.props.editItem.editingID) {
      this.props.onEdit(this.state.input);
      this.setState({ input: "" });
    } else {
      this.props.onAdd(this.state.input);
      this.setState({ input: "" });
    }
  };

  render() {
    const {className, placeholder} = this.props
    const { theme } = this.context;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.input}
            className={className}
            placeholder={placeholder}
            onChange={this.handleChange}
            ref={this.inputRef}
            editItem={this.editItem}
            style={{ color: theme.color }}
          />
        </form>
      </div>
    );
  }
}

Input.contextType = ThemeContext;

export default Input;
