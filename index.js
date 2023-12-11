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

const initialUsersState = {
  users: [{ name: "anisul islam" }],
};

// action -{Action is an object. And there are 2 important things (type,payload)}
// Increment Counter

// action type
const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

// action type
// const decrementCounter = () => {
//   return {
//     type: DECREMENT,
//   };
// };

const addUser = () => {
  return {
    type: ADD_USER,
    payload: { name: "shakil" },
  };
};

// create reducer for counter
const counterReducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state, //when multiplae state then we use spreade opertor to catch all the state
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        count: state.count - 1,
      };

    default:
      state;
  }
};

// Main things of react redux Tool kits
// 1. state
// 2. dispatch action
// 3. reducer
// 4. store - getState(),dispatch(), subscribe()
