import {combineReducers} from 'redux'

import entriesandegresses from './entriesandegresses'
import operations from './operations'
import totals from './totals'


export default combineReducers({
    entriesandegresses,
    operations,
    totals
})