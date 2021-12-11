import { composeWithDevTools } from "redux-devtools-extension";
import { createStore,applyMiddleware } from "redux";
import rootReducer from "../redux/rootReducer"
const store=createStore(rootReducer,composeWithDevTools(applyMiddleware()))
export default store