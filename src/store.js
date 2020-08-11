import {createStore , applyMiddleware , compose} from "redux"
import rootReducer from "./reducers"

const logger = store => next => action => {
    console.log('action', action)
    next(action)
    console.log('current state', store.getState().CounterReducer)
    
   }

const store=createStore(rootReducer ,compose(applyMiddleware(logger),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) )
// console.log("state",store)
export default store