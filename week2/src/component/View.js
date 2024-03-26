import React from "react";
import Menu from "./Menu";
import "../totalcss/View.css"
export default class View extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="view">
        {this.props.list.map((item) => (
          <div className="ul-todo-list" key={item.id}>
            <input
              className="toggle"
              type="checkbox"
              checked={item.checked}
              onChange={() => this.props.onChange(item.id)}
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
              <button onClick={() => this.props.onClick(item.id)}>X</button>
            </div>
          </div>
        ))}
        {this.props.count ? (
          <Menu
            count={this.props.count}
            onClear={this.props.onClear}
            onFilter={this.props.onFilter}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}
