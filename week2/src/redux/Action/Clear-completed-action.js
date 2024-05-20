import { action_type } from "../Reducer/Main-reducer";

export const clearCompleted = () => {
  return {
    type: action_type.CLEAR_COMPLETED,
  };
};
