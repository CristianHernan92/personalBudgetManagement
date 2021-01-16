const init={
    entryes:[]
}

export default (state=init,action) =>{
    const newState = {... state}
    switch(action.type){
        case 'BRING_ALL_ENTRYES':                       
            newState.entryes = action.entryes
            break       
        default:
            return state
    }
    return newState
}