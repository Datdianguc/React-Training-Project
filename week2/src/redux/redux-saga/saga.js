import action_type from "../Action/ACTION_TYPE";
import axios from "axios";
import { call, put, takeLatest, all } from "redux-saga/effects";

export function* fetchTodo() {
  try {
    const response = yield call(
      axios.get,
      "https://66546e601c6af63f4677e5a6.mockapi.io/todostorage"
    );
    yield put({ type: action_type.LOAD_TODO_SUCCESS, payload: response.data });
  } catch (error) {
    console.log("Error loading todo", error);
  }
}

export function* addTodoSaga(action) {
  try {
    console.log('Adding todo:', action.payload);
    const response = yield call(
      axios.post,
      "https://66546e601c6af63f4677e5a6.mockapi.io/todostorage",
      {
        todo: action.payload,
        checked: false,
      }
    );
    yield put({
      type: action_type.ADD_TODO_SUCCESS,
      payload: response.data, // lien ket giua wscp voi main reducer
    });
  } catch (error) {
    console.log("Error adding todo", error);
  }
}

function* deleteTodoSaga(action) {
  try {
    yield call(
      axios.delete,
      `https://66546e601c6af63f4677e5a6.mockapi.io/todostorage/${action.payload}`
    );
    yield put({
      type: action_type.DELETE_TODO_SUCCESS,
      payload: { id: action.payload },
    });
  } catch (error) {
    yield put({
      type: action_type.DELETE_TODO_FAILURE,
      payload: { error: error.message },
    });
    console.error("Error deleting todo:", error);
  }
}

function* editTodoSaga(action) {
  try {
    const { id, todo } = action.payload;
    console.log('Editing todo:', action.payload);
    const response = yield call(axios.put, `https://66546e601c6af63f4677e5a6.mockapi.io/todostorage/${id}`, {
      todo,
      checked: false, 
    });
    yield put({ type: action_type.EDIT_TODO_SUCCESS, payload: response.data });
  } catch (error) {
    console.log('Error editing todo', error);
  }
}

export function* watchFetchTodos() {
  yield takeLatest(action_type.LOAD_TODO_REQUEST, fetchTodo);
}

export function* watchAddTodo() {
  yield takeLatest(action_type.ADD_TODO_REQUEST, addTodoSaga);
}

export function* watchDeleteTodo() {
  yield takeLatest(action_type.DELETE_TODO_REQUEST, deleteTodoSaga);
}

function* watchEditTodo() {
  yield takeLatest(action_type.EDIT_TODO_REQUEST, editTodoSaga);
}


export default function* rootSaga() {
  yield all([
    watchFetchTodos(),
    watchAddTodo(),
    watchDeleteTodo(),
    watchEditTodo(),
  ]);
}
