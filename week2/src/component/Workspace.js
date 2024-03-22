import React from "react";
import Button from "./filterbutton";
import "../totalcss/Workspace.css";
export default class Workspace extends React.Component {
  state = {
    count: 0,
    text: "",
    filter: "all",
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

  handleDelete = (id) => {
    this.setState((prevState) => ({
      list: prevState.list.filter((item) => item.id !== id),
      count: this.state.count - 1,
    }));
  };

  handleFilterChange = (filter) => {
    this.setState({ filter });
  };

  handleClearCompleted = () => {
    this.setState((prevState) => ({
      list: prevState.list.filter((item) => !item.checked),
      count: prevState.list.filter((item) => !item.checked).length,
    }));
  };

  render() {
    const { list, filter } = this.state;
    let filteredList = list;
    if (filter === "active") {
      filteredList = list.filter((item) => !item.checked);
    } else if (filter === "completed") {
      filteredList = list.filter((item) => item.checked);
    }
    return (
      <div className="workspace">
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.text}
            className="pleasetype"
            placeholder="What needs to be done?"
            onChange={this.handleChange}
          />
        </form>
        <div className="view">
          {filteredList.map((item) => (
            <div className="ul-todo-list" key={item.id}>
              <input
                className="toggle"
                type="checkbox"
                checked={item.checked}
                onChange={() => this.handleCheckboxChange(item.id)}
              />
              <label
                className="todo-item-label"
                style={{
                  textDecoration: item.checked ? "line-through" : "none",
                }}
              >
                {item.name}
              </label>
              <div className="erase">
                <button onClick={() => this.handleDelete(item.id)}>X</button>
              </div>
            </div>
          ))}
          {this.state.count ? (
            <div className="menu">
              <div className="counter">{this.state.count} items left!</div>
              <ul>
                <li>
                  <Button
                    name="All"
                    onClick={() => this.handleFilterChange("all")}
                  />
                </li>
                <li>
                  <Button
                    name="Active"
                    onClick={() => this.handleFilterChange("active")}
                  />
                </li>
                <li>
                  <Button
                    name="Completed"
                    onClick={() => this.handleFilterChange("completed")}
                  />
                </li>
              </ul>
              <div className="clearCompleted">
                <button onClick={this.handleClearCompleted}>
                  Clear Completed
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
