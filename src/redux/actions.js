// import { exp } from "mathjs";
import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./types";

export function addFav(character){
    return{
        type: ADD_FAV,
        payload: character
    }
}

export function removeFav (id) {
    return{
        type: REMOVE_FAV,
        payload: id
    }
}

export function filterCards(gender){
    return{
        type:FILTER,
        payload: gender 
    }
}
export function orderCards(orden){
    return{
        type:ORDER,
        payload: orden 
    }
}