import { ADD_DRINK, REMOVE_DRINK } from "./actions";

const initialState = {
  myDrinks: [],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_DRINK:
      return {
        ...state,
        myDrinks: [...state.myDrinks, payload],
      };
    case REMOVE_DRINK:
      return {
        ...state,
        myDrinks: state.myDrinks.filter((c) => c.idDrink !== payload)
      }
    default:
      return state;
  }
}
