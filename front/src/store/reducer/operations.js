const init={
    lasttenoperations:[]
}

export default (state=init,action) =>{
    const newState = {... state}
    switch(action.type){
        case 'UPDATE_LAST_TEN_OPERATIONS':    
            newState.lasttenoperations = action.lastten
            break  
        default:
            return state
    }
    return newState
}