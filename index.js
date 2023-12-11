// state - count: 0

// action - increment, decrement, reset
// reducer
// store

const { createStore } = require("redux");

// Defining Constans
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

// Defining State
const initialState = {
  count: 0,
  amount: 0,
};

// Defining Action for Increment
const incrementAction = () => {
  return {
    type: INCREMENT,
  };
};

// Defining Action for Decrement
const decrementAction = () => {
  return {
    type: DECREMENT,
  };
};

// Defining Action for Reset
const resetAction = () => {
  return {
    type: RESET,
  };
};

// Creating Reducer

const counterReducer = (state = initialState, action) => {
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

    case RESET:
      return {
        ...state,
        count: 0,
      };

    default:
      state;
  }
};

// Create Store
const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(decrementAction());
store.dispatch(resetAction());
