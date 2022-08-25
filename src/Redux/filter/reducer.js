import { SELECTAUTHOR, SELECTCATEGORY, SELECTQUERY } from "./actionTypes";

const initialState={
    category: '',
    author: '',
    query: ''
}

function filterReducer(state=initialState, action){
    if(action.type === SELECTCATEGORY){
         console.log(action.payload);
        return {
            ...state,
            category: action.payload,
            author: '',
            query: ''
        }
    }else if(action.type === SELECTAUTHOR){
        return {
            ...state,
            author: action.payload,
            category: '',
            query: ''
        }
    }else if(action.type === SELECTQUERY){
        return {
            ...state,
            author: '',
            category: '',
            query: action.payload
        }
    }
    else{
        return state;
    }
}
export default filterReducer;