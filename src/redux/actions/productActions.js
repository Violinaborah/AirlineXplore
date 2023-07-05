import shopApi from "../../apis/shopApi";
import { ActionTypes } from "../constants/action-type";

export const fetchProducts = () => {
  return async function (dispatch) {
    try {
      const response = await shopApi.get('/06239db9-51a0-4b1d-933a-d9f4f1a7edae');
      dispatch({
        type: ActionTypes.FETCH_PRODUCTS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = (product) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
