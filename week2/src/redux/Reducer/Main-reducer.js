import { current } from "immer"
import WorkspaceComponent from "../../component/Workspace";

export const type = {
    AddOrEditAction: "addOrEdit",
    Delete: "handleDelete",
};

const initState = {
        status: FILTER_STATUS.ALL,
        list: [],
        currentPage: 1,
        view: [],
        input: ""
};


const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case type.AddOrEdit:
        
            return {
                
            }
        case type.Filter:
            return {

            }
        case type.Delete:
            return {

            }
            default:
                return state;
    }
}

export default rootReducer;