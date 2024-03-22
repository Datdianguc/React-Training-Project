import React from "react";

export default class ToggleAll extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <button onClick={this.props.onClick}>{this.props.name}</button>
  }
}
