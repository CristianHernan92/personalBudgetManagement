const init={
    totals:{}
}

export default (state=init,action) =>{ 
    const newState = {... state}
    switch(action.type){
        case 'BRING_TOTALS':                      
            newState.totals = action.totals
            break  
        default:
            return state
    }
    return newState
}