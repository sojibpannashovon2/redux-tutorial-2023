# redux-tutorial-2023

                         Necessity  of  Redux in React

Redux is an open-source JavaScript library for managing and centralising application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark. 

React redux is an advanced state management library for React. As we learned earlier, React only supports component level state management. In a big and complex application, a large number of components are used. React recommends moving the state to the top level component and passing the state to the nested component using properties. It helps to some extent but it becomes complex when the components increase.
React redux chips in and helps to maintain state at the application level. React redux allows any component to access the state at any time. Also, it allows any component to change the state of the application at any time.


Let us learn about how to write a React application using React redux in this documentation.
Concepts:
React redux maintains the state of the application in a single place called Redux store. React components can get the latest state from the store as well change the state at any time. Redux provides a simple process to get and set the current state of the current application and now describe these concepts below.

Store - The central place to store the state of the application


  const {createStore} = require("redux");


Action:
Action - Action is a plain object with the type of the action to be done and the input( called payload ) necessary to do the action. For example,  action for adding product and get product in the Redux store contains ADD_PRODUCT and GET_PRODUCT as type and an object with item’s details as payload. The action can be represented as -


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

Reducer:
Reducer - Reducers are pure functions used to create a new state based on the existing state and the current action. It returns the newly created state. For example, in add product scenario, it creates a new product  list and merges the product from the state and new item and return the newly created list -


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



