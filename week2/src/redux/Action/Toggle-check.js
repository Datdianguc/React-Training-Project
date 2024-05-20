import { action_type } from "../Reducer/Main-reducer";

export const toggleCheck = (id) => {
    return {
      type: action_type.TOGGLE_CHECK,
      payload: id,  
    };
};