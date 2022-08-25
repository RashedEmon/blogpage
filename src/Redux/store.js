import { createStore } from "redux";
import rootRedcuer from "./rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(rootRedcuer,composeWithDevTools());

export default store;