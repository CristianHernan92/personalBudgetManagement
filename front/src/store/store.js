import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import combineReducers from './reducer/index'

export default createStore(combineReducers,applyMiddleware(thunk))

