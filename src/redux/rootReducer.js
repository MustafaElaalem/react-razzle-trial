import { combineReducers } from "redux";
import countReduce from "./counter/reducers/countReducer"
//thi is very important note during accessing the state in components
const rootReducer = combineReducers({
countReduce
});

export default rootReducer;
