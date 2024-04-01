import React from "react";
import "../totalcss/Workspace.css";
import Pagination from "./Pagination";
import ToggleAll from "./ToggleAll";
import View from "./View";
import ForwardedInput from "./Input";
export const FILTER_STATUS = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed"
}
export class Workspace extends React.Component {
  constructor(){
    super();
    this.inputRef = React.createRef();
  }
  state = {
    count: 0,
    text: "",
    filter: "all",
    list: [],
    currentPage: 1,
    recordsPerPage: 5,
  };

  handle

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

  handlePageChange = (currentPage) => {
    this.setState({
      currentPage,
    });
  };
  goToNextPage = () => {
    const { currentPage, recordsPerPage, list } = this.state;
    const nPages = Math.ceil(list.length / recordsPerPage);
    if (currentPage !== nPages) this.setState({ currentPage: currentPage + 1 });
  };
  goToPrevPage = () => {
    const { currentPage } = this.state;
    if (currentPage !== 1) this.setState({ currentPage: currentPage - 1 });
  };

  render() {
    const { list, filter, currentPage, recordsPerPage } = this.state;
    let filteredList = list;
    if (filter === "active") {
      filteredList = list.filter((item) => !item.checked);
    } else if (filter === "completed") {
      filteredList = list.filter((item) => item.checked);
    }

    const nPages = Math.ceil(list.length / recordsPerPage);

    const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
    //ouput = [1, 2, 3, ... ,8 , 9, 10]

    return (
      <div className="workspace">
        <ForwardedInput
          onSubmit={this.handleSubmit}
          value={this.state.text}
          className="pleasetype"
          placeholder="What needs to be done?"
          onChange={this.handleChange}
          ref={this.inputRef}
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
          pgIndex={this.state.currentPage}
          handleEdit={this.editItem}
          handleEditChange={this.handleEditChange}
          handleEditSubmit={this.handleEditSubmit}
        />
        <Pagination
          pageNumbers={pageNumbers}
          goToNextPage={this.goToNextPage}
          goToPrevPage={this.goToPrevPage}
          currentPage={currentPage}
          handlePageChange={this.handlePageChange}
        />
      </div>
    );
  }
}