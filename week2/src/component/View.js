import React, { useState, useContext, useEffect } from "react";
import Menu from "./Menu";
import "../totalcss/View.css";
import { ThemeContext } from "./ThemeProvider";
import { useDispatch } from "react-redux";
import action_type from "../redux/Action/ACTION_TYPE";
export default function View(props) {
  const [view, setView] = useState([]);
  const {
    count,
    list,
    pgIndex,
    scrollRef,
    onScroll,
    handleEdit,
    onClear,
  } = props;

  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);

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

  return (
    <div
      className="view"
      ref={scrollRef}
      onScroll={onScroll}
      style={{ height: 300, overflow: "auto" }}
    >
      {view.map((item) => (
        <div className="ul-todo-list" key={item.id}>
          <input
            className="toggle"
            type="checkbox"
            checked={item.checked}
            onClick={() =>
              dispatch({ type: action_type.TOGGLE_CHECK, payload: item.id})
            }
          />
          <label
            className="todo-item-label"
            style={{
              textDecoration: item.checked ? "line-through" : "none",
              color: theme.color,
            }}
          >
            {item.todo}
          </label>
          <button
            className="edit"
            onClick={() => handleEdit(item.id, item.todo)}
            style={{
              color: theme.color,
              border: theme.border,
              backgroundColor: theme.backgroundButton,
            }}
          >
            edit
          </button>
          <div className="erase">
            <button
              onClick={() =>
                dispatch({ type: action_type.DELETE_TODO, payload: {id: item.id}})
              }
              style={{
                color: theme.color,
                border: theme.border,
                backgroundColor: theme.backgroundButton,
              }}
            >
              X
            </button>
          </div>
        </div>
      ))}
      {list.length > 0 ? (
        <Menu count={count} onClear={onClear} />
      ) : (
        ""
      )}
    </div>
  );
}
