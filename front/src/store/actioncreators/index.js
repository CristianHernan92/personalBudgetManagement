import axios from 'axios'

import {BRING_ALL_ENTRIES,BRING_ALL_EGRESSES,UPDATE_LAST_TEN_OPERATIONS,BRING_TOTALS} from '../actions/index'

export const bringallentries= (dispatch)=>()=> 
    axios.get('/user/get').then(res=>{
        axios.get(`/operation/bringallentries/${res.data.id}`)
        .then(res=> dispatch(BRING_ALL_ENTRIES(res.data)))
    })    
    .catch(err=> {console.log(err)})  

export const bringallegresses= (dispatch)=>()=> 
    axios.get('/user/get').then(res=>{
        axios.get(`/operation/bringallegresses/${res.data.id}`)
        .then(res=> dispatch(BRING_ALL_EGRESSES(res.data)))
    })    
    .catch(err=> {console.log(err)})   

export const updatelasttenoperations= (dispatch)=>()=>
    axios.get('/user/get').then(res=>{
            axios.get(`/operation/bringlasttenoperations/${res.data.id}`)
            .then(res=> dispatch(UPDATE_LAST_TEN_OPERATIONS(res.data)))        
    })    
    .catch(err=> {console.log(err)})


export const createandupdatelasttenoperations= (dispatch)=>(objeto)=> 
    axios.get('/user/get').then(res=>{
        objeto.id=res.data.id
        axios.post("/operation/create/",objeto)
        .then(()=>axios.get(`/operation/bringlasttenoperations/${res.data.id}`)
        .then(res=> dispatch(UPDATE_LAST_TEN_OPERATIONS(res.data))))       
    })    

export const bringtotals= (dispatch)=>()=> 
    axios.get('/user/get').then(res=>{
            axios.get(`/operation/totalentriesandegresses/${res.data.id}`)
            .then(res=> dispatch(BRING_TOTALS(res.data)))        
    })    
    .catch(err=> {console.log(err)})
