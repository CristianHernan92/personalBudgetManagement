import axios from 'axios'

import {TRAER_TODOS,TRAER_COINCIDENTES} from '../actions/index'

export const traertodos = (dispatch)=>()=> {   
    axios.get('/productos/traertodos').then((res)=> dispatch(TRAER_TODOS(res.data)))
}

export const traercoincidentes = (dispatch)=>(value)=> {   
    axios.post('/productos/traercoincidentes',{value}).then((res)=> dispatch(TRAER_COINCIDENTES(res.data)))
}