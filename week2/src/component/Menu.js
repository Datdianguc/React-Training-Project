import React from "react";
import FilterButton from "./filterbutton";
import "../totalcss/Menu.css"
import { FILTER_STATUS } from "./Workspace";
export default class Menu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="menu">
        <div className="counter">{this.props.count} items left!</div>
        <ul>
          <li>
            <FilterButton
              name="All"
              onClick={() => this.props.onFilter(FILTER_STATUS.ALL)}
            />
          </li>
          <li>
            <FilterButton
              name="Active"
              onClick={() => this.props.onFilter(FILTER_STATUS.ACTIVE)}
            />
          </li>
          <li>
            <FilterButton
              name="Completed"
              onClick={() => this.props.onFilter(FILTER_STATUS.COMPLETED)}
            />
          </li>
        </ul>
        <div className="clearCompleted">
          <button onClick={this.props.onClear}>Clear Completed</button>
        </div>
      </div>
    );
  }
}