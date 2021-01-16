import {combineReducers} from 'redux'

import entryReducer from './entryReducer'
import egressReducer from './egressReducer'


export default combineReducers({
    entryes: entryReducer,
    egresses: egressReducer
})