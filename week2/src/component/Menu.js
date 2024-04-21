import React from "react";
import FilterButton from "./filterbutton";
import "../totalcss/Menu.css";
import { FILTER_STATUS } from "./Workspace";
import { ThemeContext } from "./ThemeProvider";
export default class Menu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { onFilter, count, onClear } = this.props;
    const { theme } = this.context;
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
              onClick={() => onFilter(FILTER_STATUS.ALL)}
            />
          </li>
          <li>
            <FilterButton
              name="Active"
              onClick={() => onFilter(FILTER_STATUS.ACTIVE)}
            />
          </li>
          <li>
            <FilterButton
              name="Completed"
              onClick={() => onFilter(FILTER_STATUS.COMPLETED)}
            />
          </li>
        </ul>
        <div className="clearCompleted">
          <button
            onClick={onClear}
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
}

Menu.contextType = ThemeContext;
