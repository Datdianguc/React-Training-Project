import React, { useContext } from "react";
import FilterButton from "./filterbutton";
import "../totalcss/Menu.css";
// import { FILTER_STATUS } from "../redux/Reducer/Main-reducer";
import FILTER_STATUS from "../redux/Action/FILTER_STATUS";
import { ThemeContext } from "./ThemeProvider";
import { useDispatch } from "react-redux";
import action_type from "../redux/Action/ACTION_TYPE";
export default function Menu(props) {
    const { count } = props;
    const dispatch = useDispatch();
    const { theme } = useContext(ThemeContext)
    return (
      <div className="menu">
        <div
          className="counter"
          style={{
            color: theme.color,
            border: theme.border,
            backgroundColor: theme.background2,
          }}
        >
          {count} items left!
        </div>
        <ul>
          <li>
            <FilterButton
              name="All"
              onClick={() => dispatch({type: action_type.FILTER_TODO, payload: FILTER_STATUS.ALL})}
            />
          </li>
          <li>
            <FilterButton
              name="Active"
              onClick={() => dispatch({type: action_type.FILTER_TODO, payload: FILTER_STATUS.ACTIVE})}
            />
          </li>
          <li>
            <FilterButton
              name="Completed"
              onClick={() => dispatch({type: action_type.FILTER_TODO, payload: FILTER_STATUS.COMPLETED})}
            />
          </li>
        </ul>
        <div className="clearCompleted">
          <button
            onClick={() => dispatch({type: action_type.CLEAR_COMPLETED})}
            style={{
              color: theme.color,
              border: theme.border,
              backgroundColor: theme.backgroundButton,
            }}
          >
            Clear Completed
          </button>
        </div>
      </div>
    );
  }


// Menu.contextType = ThemeContext;
