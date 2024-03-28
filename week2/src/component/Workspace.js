import React from "react";
import "../totalcss/Workspace.css";
import Pagination from "./Pagination";
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

  handlePageChange = (currentPage) => {
    this.setState({
      currentPage: currentPage,
    })
  }
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
        <button onClick={() => console.log(this.state.currentPage)}>
          "View Current Page"
        </button>
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
          pgIndex={this.state.currentPage}
        />
        <Pagination
          pageNumbers = {pageNumbers}
          goToNextPage={this.goToNextPage}
          goToPrevPage={this.goToPrevPage}
          currentPage={currentPage}
          handlePageChange={this.handlePageChange}
          // pageNumbers={Array.from({ length: nPages }, (_, i) => i + 1)}
        />
      </div>
    );
  }
}
