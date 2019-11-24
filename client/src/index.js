import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { createStore, combineReducers, applyMiddleware } from 'redux'
//import Axios from 'axios';
// import { Provider } from 'react-redux'
// import { GETRECENTDATA } from './Action'

// const initialState = {
//     isLoggedIn: false,
//     data: []
// }

// async function fetchData() {
//     const res = await Axios.get('http://localhost:8081/getData')
//     return await res.data.data

// }

// const reducer = (state = initialState, action) => {
//     let newstate = { ...state }
//     switch (action.type) {
//         case 'LOGIN':
//             console.log('in login')
//             Axios.post(`http://localhost.com:8081/login`, {
//                 username: action.username,
//                 password: action.password
//             }).then(res => {
//                 const d = res.data.login
//                 console.log(d)
//                 if (d === true) {
//                     newstate = {
//                         ...state,
//                         isLoggedIn: true
//                     }
//                     return newstate
//                 }
//             })
//             return state


//         case 'UpdateData':
//             console.log('in UpdateData')
//             return state

//         case GETRECENTDATA:
//             // Axios.get('http://localhost:8081/getData').then(res => {
//             //     const dat = res.data.data
//             //     newstate = {
//             //         ...newstate,
//             //         data: [...dat]
//             //     }

//             // }).catch(err => {
//             //     console.log('error')
//             // })
//             // console.log(newstate)
//             // return newstate
//             // break
//             console.log('wow')
//             return {
//                 ...state,
//                 data: action.payload
//             }

//             break
//         default:
//             return state

//     }


// }
// const logger = store => next => action => {
//     console.group(action.type)
//     console.info('dispatching', action)
//     let result = next(action)
//     console.log('next state', store.getState())
//     console.groupEnd()
//     return result
// }

// const rootReducer = combineReducers({ reducer })

// const store = createStore(rootReducer, applyMiddleware(logger))



ReactDOM.render(
    //<Provider store={store}>
    <App />,
    //</Provider>,
    document.getElementById('root'));

