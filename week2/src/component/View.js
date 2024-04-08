import React from "react";
import Menu from "./Menu";
import "../totalcss/View.css";
export default class View extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    view: [],
    editingId: null,
    editText: "",
  };

  componentDidUpdate(prevProps) {
    if (
      this.props.list !== prevProps.list ||
      this.props.pgIndex !== prevProps.pgIndex
    ) {
      this.setState({
        view: this.props.list.slice(
          // 5 * this.props.pgIndex - 5,
          0,
          5 * this.props.pgIndex
        ),
      });
    }
  }

  render() {
    return (
      <div
        className="view"
        style={{ height: 300, overflow: "auto" }}
        ref={this.props.scrollRef}
        onScroll={this.props.onScroll}
      >
        {this.state.view.map((item) => (
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
              {item.todo}
            </label>
            <button
              className="edit"
              onClick={() => this.props.handleEdit(item.id, item.todo)}
            >
              edit
            </button>
            <div className="erase">
              <button onClick={() => this.props.onDelete(item)}>X</button>
            </div>
          </div>
        ))}
        {this.props.list.length > 0 ? (
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