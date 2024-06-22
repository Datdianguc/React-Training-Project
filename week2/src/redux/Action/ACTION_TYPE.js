const action_type = {
  ADD_TODO_REQUEST: 'addTodoRequest',
  ADD_TODO_SUCCESS: 'addTodoSuccess',

  EDIT_TODO_REQUEST: 'EDIT_TODO_REQUEST',
  EDIT_TODO_SUCCESS: 'EDIT_TODO_SUCCESS',

  TOGGLE_CHECK: "toggleCheck",

  DELETE_TODO_REQUEST: "deleteTodoRequest",
  DELETE_TODO_SUCCESS: "deleteTodoSuccess",
  DELETE_TODO_FAILURE: "deleteTodoFailure",

  FILTER_TODO: "filterTodo",

  CLEAR_COMPLETED: "clearCompleted",

  TOGGLE_ALL: "toggleAll",
  
  LOAD_TODO_SUCCESS: "loadTodoSuccess",
  LOAD_TODO_REQUEST: "loadTodoRequest"
};
export default action_type;
