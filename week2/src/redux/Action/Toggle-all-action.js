import { action_type } from "../Reducer/Main-reducer";

export const toggleAll = () => {
    return {
      type: action_type.TOGGLE_ALL,  
    };
};