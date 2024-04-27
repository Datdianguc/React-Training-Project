import React, { useState, useRef, useContext, useEffect } from "react";
import Menu from "./Menu";
import "../totalcss/View.css";
// import { ThemeContext } from "./ThemeProvider";
export default function View(props) {
  const [view, setView] = useState([]);
  const [EditingID, setEditingID] = useState(null);
  const { count, list, pgIndex, scrollRef, onScroll, onChange, handleEdit, onDelete, onClear, onFilter } =
    props;
  // state = {
  //   view: [],
  //   editingId: null,
  //   editText: "",
  // };

  useEffect(() => {
    setView(list.slice(0, 5 * pgIndex - 1));
  }, [list, pgIndex]);

  // componentDidUpdate(prevProps) {
  //   if (
  //     list !== prevProps.list ||
  //     pgIndex !== prevProps.pgIndex
  //   ) {
  //     setView(
  //       list.slice(
  //         // 5 * this.props.pgIndex - 5,
  //         0,
  //         5 * pgIndex
  //       ),
  //     );
  //   }
  // }

  // const {
  //   onClear,
  //   onFilter,
  //   scrollRef,
  //   onScroll,
  //   onChange,
  //   handleEdit,
  //   onDelete,
  // } = this.props;
  // const { theme } = this.context;
  return (
    <div
      className="view"
      // style={{ height: 300, overflow: "auto" }}
      ref={scrollRef}
      onScroll={onScroll}
    >
      {view.map((item) => (
        <div className="ul-todo-list" key={item.id}>
          <input
            className="toggle"
            type="checkbox"
            checked={item.checked}
            onClick={() => onChange(item.id)}
          />
          <label
            className="todo-item-label"
            /*style={{
                textDecoration: item.checked ? "line-through" : "none",
                color: theme.color,
              }}*/
          >
            {item.todo}
          </label>
          <button
            className="edit"
            onClick={() => handleEdit(item.id, item)}
            /*style={{
                color: theme.color,
                border: theme.border,
                backgroundColor: theme.backgroundButton,
              }}*/
          >
            edit
          </button>
          <div className="erase">
            <button
              onClick={() => onDelete(item)}
              /*style={{
                  color: theme.color,
                  border: theme.border,
                  backgroundColor: theme.backgroundButton,
                }}*/
            >
              X
            </button>
          </div>
        </div>
      ))}
      {list.length > 0 ? (
        <Menu count={count} onClear={onClear} onFilter={onFilter} />
      ) : (
        ""
      )}
    </div>
  );
}

// View.contextType = ThemeContext;

// const View = (props) => {
//   const {list, filter, count} = props
// }
