import { combineReducers } from "redux";
import blogReducer from "./blog/reducer";
import filterReducer from "./filter/reducer";


const rootRedcuer=combineReducers({
    blog: blogReducer,
    filter: filterReducer
})

export default rootRedcuer;