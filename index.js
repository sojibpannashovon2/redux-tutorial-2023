
const { createStore, combineReducers, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");



// //1. state
// //2. dispatch action
// //3. reducer
// //4. store -getState(), dispatch(), subscribe();



// define constrain 

const INCREMENT = "INCREMENT";

const DECREMENT = "DECREMENT";

const RESET = "RESET";

const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE"

const ADD_USER = "ADD_USER"

const GET_PRODUCT = "GET_PRODUCT"

const ADD_PRODUCT = "ADD_PRODUCT"

const intailProductState = {
    products: ["rice", "oil"],
    quantity: 2,
}

const initialState = {

    user: ["Salman Khan",],
    count: 1,
}

//action 

const countIncrementState = () => {
    return {
        type: INCREMENT,
    }
}
const countDecrementState = () => {
    return {
        type: DECREMENT,
    }
}
const countResetState = () => {
    return {
        type: RESET,
    }
}
const incrementByGivenValue = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload: value,
    }
}

const addUser = (user) => {
    return {

        type: ADD_USER,
        payload: user,
    }
}
const getProduct = (product) => {
    return {

        type: GET_PRODUCT,
        payload: product,
    }
}
const addProduct = (product) => {
    return {

        type: ADD_PRODUCT,
        payload: product,
    }
}

// Reducer - pure function

const countingChangeReducer = (state = initialState, action) => {

    switch (action.type) {

        case INCREMENT:

            return {
                ...state,
                count: state.count + 1
            }

        case DECREMENT:

            return {
                ...state,
                count: state.count - 1
            }

        case RESET:

            return {
                ...state,
                count: 0,
            }
        case INCREMENT_BY_VALUE:

            return {
                ...state,
                count: state.count + action.payload,
            }
        case ADD_USER:

            return {
                user: [...state.user, action.payload],
                count: state.count + 1,
            }



        default:
            return state;
    }

}
// Reducer - pure function - for product details

const productUpdateReducer = (state = intailProductState, action) => {

    switch (action.type) {


        case GET_PRODUCT:

            return {
                ...state,
            }
        case ADD_PRODUCT:

            return {
                user: [...state.products, action.payload],
                quantity: state.quantity + 1,
            }



        default:
            return state;
    }

}

/// Store the data


// combined reducer

const combined = combineReducers({

    countReducer: countingChangeReducer,
    productReducer: productUpdateReducer,
})

const store = createStore(combined);

const store2 = createStore(productUpdateReducer, applyMiddleware(logger))


store.subscribe(() => {
    console.log(store.getState());
})
store2.subscribe(() => {
    console.log(store2.getState());
})
// store.dispatch(countIncrementState())
// store.dispatch(countIncrementState())
// store.dispatch(countIncrementState())
// store.dispatch(countDecrementState())
// store.dispatch(countResetState())

// store.dispatch(incrementByGivenValue(10))
store.dispatch(addUser("Amir Khan"))
store.dispatch(getProduct())
store.dispatch(addProduct("salt"))
store2.dispatch(addProduct("salt"))