import { createStore } from "redux";

const initialState = {
    cartQuantity: 0,
    loggedIn: false
}

function reducer(state = initialState, action) {

    switch(action.type) {
      case 'ADD_CART_QUANTITY':
          return { ...state, cartQuantity: state.cartQuantity + action.payload}
        break;
      case 'DELETE_FROM_CART':
          return { ...state, cartQuantity: state.cartQuantity - action.payload }
      case 'UPDATE_USER_LOGGEDIN_STATUS':
        return { ...state, loggedIn: action.payload }
        break;
      default:
          return state;
    }
    return state;
};

export const store = createStore(reducer);