import React from "react";
import "../totalcss/Workspace.css";
import Pagination from "./Pagination";
import ToggleAll from "./ToggleAll";
import View from "./View";
import ForwardedInput from "./Input";
export default class Workspace extends React.Component {
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
    editingId: null,
    editText: "",
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

  handleEdit = (id, name) => {
    this.setState({ editingId: id, editText: name });
  };

  handleEditChange = (event) => {
    this.setState({ editText: event.target.value });
    this.inputRef.current.focus();
  };

  handleEditSubmit = (id) => {
    const { list, editText } = this.state;
    const updatedList = list.map((item) =>
      item.id === id ? { ...item, name: editText } : item
    );
    this.setState({ list: updatedList, editingId: null, editText: "" });
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
          handleEdit={this.handleEdit}
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
