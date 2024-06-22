import action_type from "./ACTION_TYPE";

export const loadTodoRequest = () => ({
  type: action_type.LOAD_TODO_REQUEST,
});

export const loadTodoSuccess = (data) => {
  return {
    type: action_type.LOAD_TODO_SUCCESS,
    payload: data,
  };
};

export const addTodoRequest = (todo) => ({
  type: action_type.ADD_TODO_REQUEST,
  payload: todo,
});

export const addTodoSuccess = (todo) => ({
  type: action_type.ADD_TODO_SUCCESS,
  payload: todo,
});

export const editTodoRequest = (id, todo) => ({
  type: action_type.EDIT_TODO_REQUEST,
  payload: { id, todo },
});

export const editTodoSuccess = (todo) => ({
  type: action_type.EDIT_TODO_SUCCESS,
  payload: todo,
});

export const clearCompleted = () => {
  return {
    type: action_type.CLEAR_COMPLETED,
  };
};

export const deleteTodoRequest = (id) => ({
  type: action_type.DELETE_TODO_REQUEST,
  payload: id,
}); 

export const deleteTodoSuccess = (id) => ({
  type: action_type.DELETE_TODO_SUCCESS,
  payload: { id },
});

export const deleteTodoFailure = (error) => ({
  type: action_type.DELETE_TODO_FAILURE,
  payload: { error },
});

export const filterTodo = (filter) => {
  return {
    type: action_type.FILTER_TODO,
    payload: filter,
  };
};

export const toggleAll = () => {
  return {
    type: action_type.TOGGLE_ALL,
  };
};

export const toggleCheck = (id) => {
  return {
    type: action_type.TOGGLE_CHECK,
    payload: id,
  };
};







