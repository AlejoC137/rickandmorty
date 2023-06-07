// import { exp } from "mathjs";
import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./types";
import axios from 'axios'

export function addFav(character){
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
       axios.post(endpoint, character)
       .then(({ data }) => {
          return dispatch({
             type: ADD_FAV,
             payload: data,
          });
       });
    };
}

export function removeFav (id) {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
        axios.delete(endpoint).then(({ data }) => {
            return dispatch({
                type: REMOVE_FAV,
                payload: data,
            });
        });
    };
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