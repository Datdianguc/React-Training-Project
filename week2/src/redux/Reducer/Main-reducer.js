import produce from "immer";
import action_type from '../Action/ACTION_TYPE'
import FILTER_STATUS from '../Action/FILTER_STATUS'


const initState = {
  filter: FILTER_STATUS.ALL,
  list: [],
  checked: false,
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case action_type.LOAD_TODO:
      return{
        ...state,
        list: [...state.list, ...action.payload]
      }
    case action_type.ADD_OR_EDIT_TODO:
      return produce(state, (draft) => {
        const {id, item} = action.payload;
        if (id) {
          draft.list[id-1].todo = item;
        } else {
          draft.list.push({
            id: draft.list.length + 1,
            todo: item,
            checked: false,
          });
        }
      });
    case action_type.FILTER_TODO:
      return {
        ...state,
        filter: action.payload,
      };
    case action_type.TOGGLE_CHECK:
      return produce(state, (draft) => {
        draft.list[action.payload-1].checked = !draft.list[action.payload-1].checked;
      });
    case action_type.DELETE_TODO:
      return produce(state, (draft) => {
        const {id} = action.payload;
        draft.list = draft.list.filter((i) => i.id !== id);
      });
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
