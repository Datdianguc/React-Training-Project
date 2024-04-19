import React from "react";
import "../totalcss/Input.css";
class Input extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    // this.editing = this.props.editing;
    this.state = {
      input: "",
      item: {},
    };
  }

  changeState = (input) => {
    this.setState({input});
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
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.input}
            className={this.props.className}
            placeholder={this.props.placeholder}
            onChange={this.handleChange}
            ref={this.inputRef}
            editItem={this.editItem}
          />
        </form>
      </div>
    );
  }
}

export default Input;
