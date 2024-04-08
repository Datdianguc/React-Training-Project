import React from "react";
import "../totalcss/Input.css";
class Input extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    // this.editing = this.props.editing;
    this.state = {
      input: "",
    };
  }

  handleChange = (event) => {
    this.setState({ input: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newItem = this.props.workspaceRef.current.value;
    if (this.props.editing) {
      this.props.onEdit(newItem);
    } else {
      this.props.onAdd(this.state.input);
      this.setState({ input: "" });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.input}
            className={this.props.className}
            placeholder={this.props.placeholder}
            onChange={this.handleChange}
            ref={this.props.workspaceRef}
            editItem={this.editItem}
          />
        </form>
      </div>
    );
  }
}

export default Input;
