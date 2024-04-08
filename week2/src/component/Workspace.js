import React from "react";
import "../totalcss/Workspace.css";
import Pagination from "./Pagination";
import ToggleAll from "./ToggleAll";
import View from "./View";
import Input from "./Input";
export const FILTER_STATUS = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed",
};
export default class Workspace extends React.Component {
  constructor() {
    super();
    this.WorkspaceRef = React.createRef();
    this.ScrollRef = React.createRef();
    this.InputChildRef = React.createRef();
    this.editingID = null;
  }
  state = {
    count: 0,
    text: "",
    filter: "all",
    list: [],
    currentPage: 1,
    recordsPerPage: 5,
    editing: false,
  };

  editRequest = (id, name) => {
    this.setState({ editing: true });
    this.InputChildRef.current.inputRef.current.focus();
    this.InputChildRef.current.state.input = name.todo;
    this.editingID = id;
  };

  editItem = (todo) => {
    console.log(todo);
    console.log(this.editingID);
    this.setState((prevState) => ({
      list: prevState.list.map((item) => {
        console.log(item);
        return item.id === this.editingID ? { todo: todo, ...item } : item;
      }),
    }));
  };

  addItem = (item) => {
    const { list, count } = this.state;
    if (item.length > 1) {
      this.setState({
        list: [...list, { todo: item, checked: false, id: list.length + 1 }],
        count: count + 1,
      });
    }
  };

  handleCheckboxChange = (id) => {
    this.setState((prevState) => ({
      list: prevState.list.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      ),
    }));
  };

  handleDelete = (item) => {
    const { list, count } = this.state;
    this.setState({
      list: list.filter((i) => i.id !== item.id),
    });
    if (!item.status) {
      this.setState({
        count: count - 1,
      });
    }
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

  handleScroll = () => {
    const { currentPage } = this.state;
    if (
      this.ScrollRef.current.scrollTop ===
      this.ScrollRef.current.scrollHeight - this.ScrollRef.current.clientHeight
    ) {
      this.setState({
        currentPage: currentPage + 1,
      });
    }
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

    return (
      <div className="workspace">
        <Input
          onAdd={this.addItem}
          onEdit={this.editItem}
          value={this.state.text}
          className="pleasetype"
          placeholder="What needs to be done?"
          onChange={this.handleChange}
          workspaceRef={this.WorkspaceRef}
          editing={this.state.editing}
          ref={this.InputChildRef}
        />
        <div className="toggle-all-container">
          <ToggleAll name="^" onClick={() => this.handleToggleAll()} />
        </div>
        <View
          list={filteredList}
          filter={this.state.filter}
          count={this.state.count}
          onChange={this.handleCheckboxChange}
          onDelete={this.handleDelete}
          onClear={this.handleClearCompleted}
          onFilter={this.handleFilterChange}
          pgIndex={this.state.currentPage}
          handleEdit={this.editRequest}
          onScroll={this.handleScroll}
          scrollRef={this.ScrollRef}
        />
        {/* <Pagination
          pageNumbers={pageNumbers}
          goToNextPage={this.goToNextPage}
          goToPrevPage={this.goToPrevPage}
          currentPage={currentPage}
          handlePageChange={this.handlePageChange}
        /> */}
      </div>
    );
  }
}
