import axios from 'axios'

import {BRING_ALL_ENTRIES,BRING_ALL_EGRESSES,UPDATE_LAST_TEN_OPERATIONS,BRING_TOTALS} from '../actions/index'

export const bringallentries= (dispatch)=>()=> {   
    axios.get('/operation/bringallentries')
    .then(res=> dispatch(BRING_ALL_ENTRIES(res.data)))
    .catch(err=> {console.log(err)})
}

export const bringallegresses= (dispatch)=>()=> {   
    axios.get('/operation/bringallegresses')
    .then(res=> dispatch(BRING_ALL_EGRESSES(res.data)))
    .catch(err=> {console.log(err)})
}

export const updatelasttenoperations= (dispatch)=>(id)=> {
    axios.get(`/operation/bringlasttenoperations/${id}`)
    .then(res=> dispatch(UPDATE_LAST_TEN_OPERATIONS(res.data)))
    .catch(err=> {console.log(err)})
}

export const createandupdatelasttenoperations= (dispatch)=>(objeto)=> 
    axios.post("/operation/create/",objeto)
    .then(()=>updatelasttenoperations(dispatch)(objeto.id))


export const bringtotals= (dispatch)=>()=> {
    axios.get("/operation/totalentriesandegresses")
    .then(res=> dispatch(BRING_TOTALS(res.data)))
    .catch(err=> {console.log(err)})
}