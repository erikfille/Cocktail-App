export const ADD_DRINK = "ADD_DRINK";
export const REMOVE_DRINK = "REMOVE_DRINK";

export function addDrink(props) {
  return {
    type: ADD_DRINK,
    payload: props,
  };
}

export function removeDrink(drinkId) {
  return {
    type: REMOVE_DRINK,
    payload: drinkId,
  };
}
