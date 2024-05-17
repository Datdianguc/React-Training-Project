import { type } from "../Reducer/Main-reducer";

export const addOrEdit = (item) => {
    return {
      type: type.AddOrEditAction,
      payload: item,  
    };
};