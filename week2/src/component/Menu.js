import React from "react";
import FilterButton from "./filterbutton";
import "../totalcss/Menu.css"
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
              onClick={() => this.props.onFilter("all")}
            />
          </li>
          <li>
            <FilterButton
              name="Active"
              onClick={() => this.props.onFilter("active")}
            />
          </li>
          <li>
            <FilterButton
              name="Completed"
              onClick={() => this.props.onFilter("completed")}
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
