import React from "react";
import "../totalcss/Workspace.css";

import ToggleAll from "./ToggleAll";
import View from "./View";
import Input from "./Input";
export default class Workspace extends React.Component {
  state = {
    count: 0,
    text: "",
    filter: "all",
    list: [],
    currentPage: 1,
    recordsPerPage: 5,
  };

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newItem = this.state.text;
    if (newItem.trim() !== "") {
      this.setState((prevState) => ({
        count: prevState.count + 1,
        list: [
          ...prevState.list,
          { id: prevState.count + 1, name: newItem, checked: false },
        ],
        text: "",
      }));
    }
  };

  handleCheckboxChange = (id) => {
    this.setState((prevState) => ({
      list: prevState.list.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      ),
    }));
  };

  handleDelete = (id) => {
    this.setState((prevState) => ({
      list: prevState.list.filter((item) => item.id !== id),
      count: this.state.count - 1,
    }));
  };

  handleFilterChange = (filter) => {
    this.setState({ filter });
  };

  handleClearCompleted = () => {
    this.setState((prevState) => ({
      list: prevState.list.filter((item) => !item.checked),
      count: prevState.list.filter((item) => !item.checked).length,
    }));
  };

  handleToggleAll = () => {
    this.setState((prevState) => ({
      list: prevState.list.map((item) => ({
        ...item,
        checked: !prevState.list.every((item) => item.checked),
      })),
    }));
  };

  goToNextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  goToPrevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  render() {
    const { list, filter } = this.state;
    let filteredList = list;
    if (filter === "active") {
      filteredList = list.filter((item) => !item.checked);
    } else if (filter === "completed") {
      filteredList = list.filter((item) => item.checked);
    }

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = this.state.list.slice(
      indexOfFirstRecord,
      indexOfLastRecord
    );
    const nPages = Math.ceil(this.state.list.length / recordsPerPage);

    const pageNumbers = [...this.state.list(nPages + 1).key()].slice(1);


    return (
      <div className="workspace">
        <Input
          onSubmit={this.handleSubmit}
          value={this.state.text}
          className="pleasetype"
          placeholder="What needs to be done?"
          onChange={this.handleChange}
        />
        <div className="toggle-all-container">
          <ToggleAll name="^" onClick={() => this.handleToggleAll()} />
        </div>
        <View
          list={filteredList}
          filter={this.state.filter}
          count={this.state.count}
          onChange={this.handleCheckboxChange}
          onClick={this.handleDelete}
          onClear={this.handleClearCompleted}
          onFilter={this.handleFilterChange}
        />
        <Records data={currentRecords} />
        <Pagination
          count={this.state.count}
          nPages={nPages}
          currentPage={currentPage}
          recordsPerPage={recordsPerPage}
        />
      </div>
    );
  }
}
