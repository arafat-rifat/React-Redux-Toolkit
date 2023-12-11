const { createStore } = require("redux");

// defining constansce

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";

// State
const initialCounterState = {
  count: 0,
  users: "", //example for multiple state
};

// action -{Action is an object. And there are 2 important things (type,payload)}
// Increment Counter

// action type
const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};

// const addUser = () => {
//   return {
//     type: ADD_USER,
//     payload: { name: "shakil" },
//   };
// };

// create reducer for counter
const counterReducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
};

// Main things of react redux Tool kits
// 1. state
// 2. dispatch action
// 3. reducer
// 4. store - getState(),dispatch(), subscribe()

// create store
const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

// dispatch action
store.dispatch(incrementCounter());
