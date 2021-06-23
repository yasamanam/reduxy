import { ActionTypes } from "../constants/action-type.js";
import { getAllProducts } from "../../api/products";

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

// export const getProducts = () => (dispatch, getState) => {
//   getAllProducts().then((res) => {
//     console.log(res.data);
//     dispatch(setProducts(res.data));
//   });
// };

export const getProducts = () => async (dispatch, getState) => {
  let res = await getAllProducts();
  dispatch(setProducts(res.data));
};
