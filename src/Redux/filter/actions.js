import { SELECTCATEGORY,SELECTAUTHOR, SELECTQUERY } from "./actionTypes";

export function selectCategory(value){
    return {
        type: SELECTCATEGORY,
        payload: value
    }
}

export function selectAuthor(value){
    return {
        type: SELECTAUTHOR,
        payload: value
    }
}

export function selectQuery(value){
    return {
        type: SELECTQUERY,
        payload: value
    }
}