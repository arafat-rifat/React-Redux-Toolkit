const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

//Product Constains
const GET_PRODUCT = "GET_PRODUCT";
const ADD_PRODUCT = "ADD_PRODUCT";

//declearing state Of Products
const initialProductState = {
  products: ["sugar", "salt"],
  numberOfProd: 2,
};

// Product Action Type

// get product action
const getProduct = () => {
  return {
    type: GET_PRODUCT,
  };
};

// Add product action
const addProduct = (value) => {
  return {
    type: ADD_PRODUCT,
    payload: value,
  };
};

// declearing Product Reducer

const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCT: {
      return {
        ...state,
      };
    }

    case ADD_PRODUCT: {
      return {
        products: [...state.products, action.payload],
        numberOfProd: state.numberOfProd + 1,
      };
    }

    default:
      return state;
  }
};

// create Store for product reducer
const store = createStore(productReducer, applyMiddleware(logger));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProduct());
store.dispatch(addProduct("Chili"));
