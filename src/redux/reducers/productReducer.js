import { ActionTypes } from "../constants/action-type";

const initialState = {
  products: [
    {
      id: 1,
      title: "Yasaman",
      category: "programmer",
    },
  ],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;

    default:
      return state;
  }
};
