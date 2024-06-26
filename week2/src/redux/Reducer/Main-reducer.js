import produce from "immer";
import action_type from "../Action/ACTION_TYPE";
import FILTER_STATUS from "../Action/FILTER_STATUS";

const initState = {
  filter: FILTER_STATUS.ALL,
  list: [],
  checked: false,
  loading: true,
  error: null,
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case action_type.DELETE_TODO_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case action_type.LOAD_TODO_SUCCESS:
      return produce(state, (draft) => {
        draft.list = action.payload;
        draft.loading = false;
        draft.error = null;
      });
    case action_type.ADD_TODO_REQUEST:
      return produce(state, (draft) => {
        draft.loading = true;
        draft.error = null;
      });
    case action_type.ADD_TODO_SUCCESS:
      console.log('Todo added successfully:', action.payload);
      return produce(state, (draft) => {
        draft.list.push(action.payload);
        draft.loading = false;
        draft.error = null;
      });
    case action_type.EDIT_TODO_SUCCESS:
      console.log('Todo edited successfully:', action.payload);
      return produce(state, (draft) => {
        const index = draft.list.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) {
          draft.list[index] = action.payload;
        }
        draft.loading = false;
        draft.error = null;
      });
    case action_type.FILTER_TODO:
      return {
        ...state,
        filter: action.payload,
      };
    case action_type.TOGGLE_CHECK:
      return produce(state, (draft) => {
        const index = draft.list.findIndex((i) => i.id === action.payload);
        if (index !== -1) {
          draft.list[index].checked = !draft.list[index].checked;
        }
      });
    case action_type.DELETE_TODO_SUCCESS:
      return produce(state, (draft) => {
        const { id } = action.payload;
        draft.list = draft.list.filter((i) => i.id !== id);
        draft.loading = false;
        draft.error = null;
      });
    case action_type.DELETE_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case action_type.CLEAR_COMPLETED:
      return produce(state, (draft) => {
        draft.list = draft.list.filter((item) => !item.checked);
      });
    case action_type.TOGGLE_ALL:
      return produce(state, (draft) => {
        const allChecked = draft.list.every((item) => item.checked);
        draft.list.forEach((item) => (item.checked = !allChecked));
      });
    default:
      return state;
  }
};

export default todoReducer;
