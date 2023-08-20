// //define constain

const { createStore } = require("redux");

// const { createStore } = require("redux");

// const INCRIMENT = "INCREMENT"

// const DECRIMENT = "DECREMENT"

// // const ADD_USER = "ADD_USER"

// //state

// const intialCountState = {
//     count: 0,
// };

// // const initialUserState = {
// //     user: [{ name: "Md Arifur Rahman" }]
// // };


// //action - object- type, payload

// const incrInmentalCount = () => {

//     return {
//         type: INCRIMENT,
//     }
// }
// const decrInmentalCount = () => {

//     return {
//         type: DECRIMENT,
//     }
// }

// // const addUser = () => {
// //     return {
// //         type: ADD_USER,
// //         payload: { name: "Shakil" }
// //     }
// // }


// // create reducer for counter

// const counterReducer = (state = intialCountState, action) => {

//     switch (action.type) {

//         case INCRIMENT:
//             return {
//                 ...state,
//                 count: state.count + 1
//             }
//         case DECRIMENT:

//             return {
//                 ...state,
//                 count: state.count - 1
//             }



//         default:
//             state;
//     }

// }

// //1. state
// //2. dispatch action
// //3. reducer
// //4. store -getState(), dispatch(), subscribe();

// const store = createStore(counterReducer);

// store.subscribe(() => {
//     console.log(store.getState());
// })

// store.dispatch(incrInmentalCount())



// define constrain 

const INCREMENT = "INCREMENT";

const DECREMENT = "DECREMENT";

const RESET = "RESET";

const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE"

const ADD_USER = "ADD_USER"

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
            state;
    }

}

/// Store the data

const store = createStore(countingChangeReducer);

store.subscribe(() => {
    console.log(store.getState());
})

// store.dispatch(countIncrementState())
// store.dispatch(countIncrementState())
// store.dispatch(countIncrementState())
// store.dispatch(countDecrementState())
// store.dispatch(countResetState())

// store.dispatch(incrementByGivenValue(10))
store.dispatch(addUser("Amir Khan"))