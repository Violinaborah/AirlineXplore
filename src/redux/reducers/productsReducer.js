import { ActionTypes } from "../constants/action-type";

const initialState = {
    products: [],
}

export const productsReducer = (state= initialState,{type, payload})=> {
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: payload};
        case ActionTypes.FETCH_PRODUCTS:
            return{...state,products: payload};   
        default:
            return state;
    }
}