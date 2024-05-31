import React, { useEffect, useRef, useState } from "react";
import "../totalcss/Workspace.css";
// import Pagination from "./Pagination";
import ToggleAll from "./ToggleAll";
import View from "./View";
import InputComponent from "./Input";
import ThemeTogglerButton from "./theme-toggler-button";
import { useDispatch, useSelector } from "react-redux";
import { addOrEditTodo, loadTodo } from "../redux/Action/listAction";
import FILTER_STATUS from "../redux/Action/FILTER_STATUS";
import axios from "axios";

const WorkspaceComponent = () => {
  const ScrollRef = useRef(null);
  const inputChildRef = useRef(null);
  const dispatch = useDispatch();
  const { filter, list } = useSelector((state) => state);

  const [currentPage, setCurrentPage] = useState(1);

  const editingId = useRef(null);
  let count = list.filter((i) => !i.checked).length;

  const filteredList = list.filter((item) => {
    if (filter === FILTER_STATUS.ACTIVE) {
      return !item.checked;
    } else if (filter === FILTER_STATUS.COMPLETED) {
      return item.checked;
    }
    return true;
  });

  useEffect(() => {
    axios
      .get("https://66546e601c6af63f4677e5a6.mockapi.io/todostorage")
      .then((response) => {
        dispatch(loadTodo(response.data));
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const editRequest = (id, name) => {
    editingId.current = id;
    inputChildRef.current.focus();
    inputChildRef.current.value = name;
  };

  const handleAddorEdit = (item) => {
    dispatch(addOrEditTodo(item));
    axios
      .post("https://66546e601c6af63f4677e5a6.mockapi.io/todostorage", {
        id: list.length + 1,
        todo: item,
        checked: false,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    editingId.current = null;
  };

  const handleScroll = () => {
    if (
      ScrollRef.current.scrollTop ===
      ScrollRef.current.scrollHeight - ScrollRef.current.clientHeight
    ) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <ThemeTogglerButton />
      <InputComponent
        onSubmit={handleAddorEdit}
        className="pleasetype"
        placeholder="What needs to be done?"
        inputRef={inputChildRef}
      />
      <div className="toggle-all-container">
        <ToggleAll name="^" />
      </div>
      <View
        list={filteredList}
        filter={filter}
        count={count}
        pgIndex={currentPage}
        handleEdit={editRequest}
        onScroll={handleScroll}
        scrollRef={ScrollRef}
      />
    </>
  );
};

export default WorkspaceComponent;

// export default class Workspace extends React.Component {
//   constructor() {
//     super();
//     this.WorkspaceRef = React.createRef();
//     this.ScrollRef = React.createRef();
//     this.InputChildRef = React.createRef();
//     this.editItem = {
//       editingID: null,
//     };
//   }
//   state = {
//     count: 0,
//     text: "",
//     filter: FILTER_STATUS.ALL,
//     list: [],
//     currentPage: 1,
//     recordsPerPage: 5,
//   };

//   editRequest = (id, name) => {
//     this.InputChildRef.current.inputRef.current.focus();
//     this.InputChildRef.current.changeState(name.todo);
//     this.editItem.editingID = id;
//   };

//   handleEditItem = (todo) => {
//     this.setState({
//       list: this.state.list.map((item) => {
//         return item.id === this.editItem.editingID
//           ? { ...item, todo: todo }
//           : item;
//       }),
//     });
//     setList(list.map((item) => {
//         return item.id === this.editItem.editingID
//           ? { ...item, todo: todo }
//           : item;
//       }))
//     this.editItem = {
//       editingID: null,
//     };
//   };

//   addItem = (item) => {
//     const { list, count } = this.state;
//     if (item.length > 1) {
//       this.setState({
//         list: [...list, { todo: item, checked: false, id: list.length + 1 }],
//         count: count + 1,
//       });
//     }
//   };

//   handleCheckboxChange = (id) => {
//     this.setState((prevState) => ({
//       list: prevState.list.map((item) =>
//         item.id === id ? { ...item, checked: !item.checked } : item
//       ),
//     }));
//   };

//   countHandler = (event) => {
//     const { count } = this.state;
//     this.setState({
//       count: event.target.checked ? count - 1 : count + 1,
//     });
//   };

//   handleDelete = (item) => {
//     const { list, count } = this.state;
//     this.setState({
//       list: list.filter((i) => i.id !== item.id),
//     });
//     if (!item.checked) {
//       this.setState({
//         count: count - 1,
//       });
//     }
//   };

//   handleFilterChange = (filter) => {
//     this.setState({ filter });
//   };

//   handleClearCompleted = () => {
//     this.setState((prevState) => ({
//       list: prevState.list.filter((item) => !item.checked),
//       count: prevState.list.filter((item) => !item.checked).length,
//     }));
//   };

//   handleToggleAll = () => {
//     this.setState((prevState) => ({
//       list: prevState.list.map((item) => ({
//         ...item,
//         checked: !prevState.list.every((item) => item.checked),
//       })),
//     }));
//   };

//   handlePageChange = (currentPage) => {
//     this.setState({
//       currentPage,
//     });
//   };
//   goToNextPage = () => {
//     const { currentPage, recordsPerPage, list } = this.state;
//     const nPages = Math.ceil(list.length / recordsPerPage);
//     if (currentPage !== nPages) this.setState({ currentPage: currentPage + 1 });
//   };
//   goToPrevPage = () => {
//     const { currentPage } = this.state;
//     if (currentPage !== 1) this.setState({ currentPage: currentPage - 1 });
//   };

//   handleScroll = () => {
//     const { currentPage } = this.state;
//     if (
//       this.ScrollRef.current.scrollTop ===
//       this.ScrollRef.current.scrollHeight - this.ScrollRef.current.clientHeight
//     ) {
//       this.setState({
//         currentPage: currentPage + 1,
//       });
//     }
//   };

//   render() {
//     const { list, filter, currentPage, recordsPerPage } = this.state;
//     let filteredList = list;
//     if (filter === "active") {
//       filteredList = list.filter((item) => !item.checked);
//     } else if (filter === "completed") {
//       filteredList = list.filter((item) => item.checked);
//     }

//     const nPages = Math.ceil(list.length / recordsPerPage);
//     const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
//     const {theme} = this.context;

//     return (
//       <div className="workspace" style = {{backgroundColor: theme.background2}}>
//         <ThemeTogglerButton/>
//         <Input
//           onAdd={this.addItem}
//           onEdit={this.handleEditItem}
//           value={this.state.text}
//           className="pleasetype"
//           placeholder="What needs to be done?"
//           onChange={this.handleChange}
//           workspaceRef={this.WorkspaceRef}
//           editItem={this.editItem}
//           ref={this.InputChildRef}
//         />
//         <div className="toggle-all-container">
//           <ToggleAll name="^" onClick={() => this.handleToggleAll()} />
//         </div>
//         <View
//           list={filteredList}
//           filter={this.state.filter}
//           count={this.state.count}
//           onChange={this.handleCheckboxChange}
//           onDelete={this.handleDelete}
//           onClear={this.handleClearCompleted}
//           onFilter={this.handleFilterChange}
//           pgIndex={this.state.currentPage}
//           handleEdit={this.editRequest}
//           onScroll={this.handleScroll}
//           scrollRef={this.ScrollRef}
//           onCountControl={this.countHandler}
//         />
//         {/* <Pagination
//           pageNumbers={pageNumbers}
//           goToNextPage={this.goToNextPage}
//           goToPrevPage={this.goToPrevPage}
//           currentPage={currentPage}
//           handlePageChange={this.handlePageChange}
//         /> */}
//       </div>
//     );
//   }
// }

// Workspace.contextType = ThemeContext;
