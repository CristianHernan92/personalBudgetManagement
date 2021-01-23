export const BRING_ALL_ENTRIES=function(entries){
    return {
        type:'BRING_ALL_ENTRIES',
        entries
    }
}

export const BRING_ALL_EGRESSES=function(egresses){
    return {
        type:'BRING_ALL_EGRESSES',
        egresses
    }
}

export const UPDATE_LAST_TEN_OPERATIONS=function(lastten){
    return {
        type:'UPDATE_LAST_TEN_OPERATIONS',
        lastten
    }
}

export const BRING_TOTALS=function(totals){
    return {
        type:'BRING_TOTALS',
        totals
    }
}