import action_type from "../Action/ACTION_TYPE";
import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

export function* helloSaga() {
  console.log("Hello Sagas!");
}

export function* fetchTodo() {
  try {
    const response = yield call(
      axios.get,
      "https://66546e601c6af63f4677e5a6.mockapi.io/todostorage"
    );
    yield put({ type: action_type.LOAD_TODO, payload: response.data });
  } catch (error) {
    console.log("Error loading todo", error);
  }
}

export function* addTodoSaga(action) {
  try {
    const response = yield call(
      axios.post,
      "https://66546e601c6af63f4677e5a6.mockapi.io/todostorage",
      {
        todo: action.payload,
        checked: false,
      }
    );
    yield put({
      type: action_type.ADD_OR_EDIT_TODO_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.log("Error adding todo", error);
  }
}

export function* deleteTodoSaga(action) {
  try {
    yield call(
      axios.delete,
      `https://66546e601c6af63f4677e5a6.mockapi.io/todostorage/${action.payload}`
    );
    yield put({
      type: action_type.DELETE_TODO_SUCCESS,
      payload: action.payload,
    });
  } catch (error) {
    console.error("Error deleting todo:", error);
  }
}

export function* mySaga() {
    yield takeLatest(action_type.LOAD_TODO_REQUEST, fetchTodo);
    yield takeLatest(action_type.ADD_TODO_REQUEST, addTodoSaga);
    yield takeLatest(action_type.DELETE_TODO_REQUEST, deleteTodoSaga);
  }
  

