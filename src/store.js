import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from './rootReducer'
import {createLogger} from 'redux-logger'

//create store with logging and thunk middleware for async
const store = createStore(reducer, applyMiddleware(createLogger({collapsed: true}), thunk));
export default store