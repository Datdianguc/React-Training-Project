import React from "react";
import "../totalcss/Workspace.css";
export default class Workspace extends React.Component {
  state = { count: 0, text: "", list: [] };
  handleChange = (event) => {
    this.setState({ text: event.target.value });
    console.log(this.state.text);
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const NewItem = this.state.text;
    this.setState({
        count: this.state.count +1,
        list: [...this.state.list, NewItem] 
    }) 
  } 
  render() {
    return (
      <div className="typing">
        <input
          className="pleasetype"
          placeholder="What need to be done?"
          onChange={this.handleChange}
        ></input>
      </div>
    );
  }
}
