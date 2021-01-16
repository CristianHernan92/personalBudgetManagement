import axios from 'axios'

import {BRING_ALL_ENTRYES,BRING_ALL_EGRESSES} from '../actions/index'

export const bringallentryes= (dispatch)=>()=> {   
    axios.get('/operation/bringallentryes').then((res)=> dispatch(BRING_ALL_ENTRYES(res.data)))
}

export const bringallegresses= (dispatch)=>()=> {   
    axios.get('/operation/bringallegresses').then((res)=> dispatch(BRING_ALL_EGRESSES(res.data)))
}
