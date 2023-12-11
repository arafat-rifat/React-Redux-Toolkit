const { createStore, combineReducers } = require("redux");

//Product Constains
const GET_PRODUCT = "GET_PRODUCT";
const ADD_PRODUCT = "ADD_PRODUCT";

//Cart Constains
const GET_CART_ITEMS = "GET_CART_ITEMS";
const ADD_CART_ITEMS = "ADD_CART_ITEMS";

//declearing state Of Products
const initialProductState = {
  products: ["sugar", "salt"],
  numberOfProd: 2,
};

//declearing state Of Carts
const initialCartState = {
  carts: ["sugar"],
  numberOfCart: 1,
};

// Product Action Type

const getProduct = () => {
  return {
    type: GET_PRODUCT,
  };
};

const addProduct = (value) => {
  return {
    type: ADD_PRODUCT,
    payload: value,
  };
};

// Cart Action Types

const getCartItems = () => {
  return {
    type: GET_CART_ITEMS,
  };
};

const addCartItems = (cart) => {
  return {
    type: ADD_CART_ITEMS,
    payload: cart,
  };
};

//DECLEARING Cart reducer

const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case GET_CART_ITEMS: {
      return {
        ...state,
      };
    }
    case ADD_CART_ITEMS: {
      return {
        carts: [...state.carts, action.payload],
        numberOfCart: state.numberOfCart + 1,
      };
    }
    default:
      return state;
  }
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

// We are use combined reducer for multiple reducer

const rootReducer = combineReducers({
  productR: productReducer,
  cartR: cartReducer,
});

// create Store for product reducer
const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProduct());
store.dispatch(addProduct("Chili"));

store.dispatch(getCartItems());
store.dispatch(addCartItems("Tea"));
