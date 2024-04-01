import React from "react";
import "../totalcss/Input.css"
class Input extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.editing = '';
    this.isEditing = null;
  }

  editItem = (id, name) => {
    this.focusInput();
    this.inputRef.current.value = name;
    this.setState({editing: id});
  }

  addItem = (id, item) => {
    const updatedList = list.map((item) =>
      item.id === id ? { ...item, name: editText } : item
    );
    this.setState({ list: updatedList, editingId: null, editText: "" });
  };

  focusInput = () => {
    this.inputRef.current.focus();
  };

  handleChange = (event) => {
    this.editing = event.target.value;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.editing) {
      this.props.editItem(id);
    } else {
      this.props.addItem({name: this.inputRef.current.value})
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.editing}
          className={this.props.className}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
          ref={this.inputRef}
        />
      </form>
    )
 };
}

export default Input;