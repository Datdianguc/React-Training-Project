import React from "react";
import "../totalcss/Workspace.css";
export default class Workspace extends React.Component {
  state = {
    count: 0,
    text: "",
    list: [],
  };

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newItem = this.state.text;
    if (newItem.trim() !== "") {
      this.setState((prevState) => ({
        count: prevState.count + 1,
        list: [
          ...prevState.list,
          { id: prevState.count + 1, name: newItem, checked: false },
        ],
        text: "",
      }));
    }
  };

  handleCheckboxChange = (id) => {
    this.setState((prevState) => ({
      list: prevState.list.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      ),
    }));
  };

  render() {
    return (
      <div className="typing">
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.text}
            className="pleasetype"
            placeholder="What need to be done?"
            onChange={this.handleChange}
          />
        </form>
        <div className="output">
          {this.state.list.map((item) => (
            <div key={item.id}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => this.handleCheckboxChange(item.id)}
              />
              <label
                style={{
                  textDecoration: item.checked ? "line-through" : "none",
                }}
              >
                {item.name}
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
