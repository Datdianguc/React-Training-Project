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
    const {count, onClear, onFilter, scrollRef, onScroll, onChange, handleEdit, onDelete, onCountControl} = this.props;
    return (
      <div
        className="view"
        style={{ height: 300, overflow: "auto" }}
        ref={scrollRef}
        onScroll={onScroll}
      >
        {this.state.view.map((item) => (
          <div className="ul-todo-list" key={item.id}>
            <input
              className="toggle"
              type="checkbox"
              checked={item.checked}
              onClick={() => onChange(item.id)}
              onChange={onCountControl}
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
              onClick={() => handleEdit(item.id, item)}
            >
              edit
            </button>
            <div className="erase">
              <button onClick={() => onDelete(item)}>X</button>
            </div>
          </div>
        ))}
        {this.props.list.length > 0 ? (
          <Menu
            count={count}
            onClear={onClear}
            onFilter={onFilter}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}
