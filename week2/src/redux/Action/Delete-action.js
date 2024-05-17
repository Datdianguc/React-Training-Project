import { type } from "../Reducer/Main-reducer";

export const handleDelete = (item) => {
    return {
      type: type.Delete,
      payload: item,  
    };
};