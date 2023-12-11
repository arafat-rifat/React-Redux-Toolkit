// state - ?

// action - increment, decrement, reset
// reducer
// store

const { createStore } = require("redux");

// Defining Constans
const ADD_USERS = "ADD_USERS";

// Defining State
const initialState = {
  users: ["anis"],
  count: 1,
};

// Defining Action for ADD_USER
const addUsers = (value) => {
  return {
    type: ADD_USERS,
    payload: value,
  };
};

// Creating Reducer

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USERS:
      return {
        users: [...state.users, action.payload],
        count: state.count + 1,
      };

    default:
      state;
  }
};

// Create Store
const store = createStore(usersReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addUsers("rifat"));
store.dispatch(addUsers("rafi"));
