import action_type from "./ACTION_TYPE";

export const addOrEditTodo = (item) => {
  return {
    type: action_type.ADD_OR_EDIT_TODO,
    payload: item,
  };
};

export const clearCompleted = () => {
  return {
    type: action_type.CLEAR_COMPLETED,
  };
};

export const deleteTodo = (id) => {
  return {
    type: action_type.DELETE_TODO,
    payload: id,
  };
};

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
