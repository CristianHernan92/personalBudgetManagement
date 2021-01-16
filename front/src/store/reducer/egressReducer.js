const init={
    egresses:[]
}

export default (state=init,action) =>{
    const newState = {... state}
    switch(action.type){
        case 'BRING_ALL_EGRESSES':                       
            newState.egresses = action.egresses
            break
        default:
            return state
    }
    return newState
}