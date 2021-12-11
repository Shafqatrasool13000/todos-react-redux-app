import { combineReducers } from "redux";
import TodosCrudReducer from "./reducers/TodosCrudReducer"
const rootReducer = combineReducers({
    TodosCrudReducer:TodosCrudReducer,
})
export default rootReducer;