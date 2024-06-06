import action_type from "./ACTION_TYPE";
import axios from "axios";

export const addOrEditTodoSuccess = (item) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://66546e601c6af63f4677e5a6.mockapi.io/todostorage",
      {
        item,
        checked: false,
      }
    );
    dispatch(addOrEditTodoSuccess(response.data));
  } catch (error) {
    console.error("Error loading todo:", error);
  }
};

export const clearCompleted = () => {
  return {
    type: action_type.CLEAR_COMPLETED,
  };
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    await axios.delete(
      `https://66546e601c6af63f4677e5a6.mockapi.io/todostorage/${id}`
    );
    dispatch(deleteTodo(id));
  } catch (error) {
    console.error("Error deleting todo:", error);
  }
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

export const loadTodo = (data) => {
  return {
    type: action_type.LOAD_TODO,
    payload: data,
  };
};
