// state - count: 0

// action - increment, decrement, reset
// reducer
// store

const { createStore } = require("redux");

// Defining Constans
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";

// Defining State
const initialState = {
  count: 0,
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

// Defining Action for payload value
const incrementCounterByValue = (value) => {
  return {
    type: INCREMENT_BY_VALUE,
    payload: value,
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

    case INCREMENT_BY_VALUE:
      return {
        ...state,
        count: state.count + action.payload,
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

store.dispatch(incrementCounterByValue(10));
store.dispatch(incrementCounterByValue(5));
