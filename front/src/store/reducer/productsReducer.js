const init={
    productos:[]
}

/* function  switchear(elemento,valor1,valor2,valor3,valor4) {
    switch(elemento){
        case 1:
            elemento=valor1; break
        case 2:
            elemento=valor2; break
        case 3:
            elemento=valor3; break
        default:
            elemento=valor4; break
    }
    return elemento    
} */

/* function cambiaridsporsusvaloresasociados(action){
    for(let i=0;i!=action.productos.length;++i){
        action.productos[i].waistId=switchear(action.productos[i].waistId,"M","L","XL","XXL")
        action.productos[i].categorieId=switchear(action.productos[i].categorieId,"Buso","Pantalon","Remera","Media")
        action.productos[i].locationId=switchear(action.productos[i].locationId,"Ensenada","La Plata","Villa Gesel","Berisso")
    }
    return action
} */

export default (state=init,action) =>{
    const newState = {... state}
    switch(action.type){
        case 'TRAER_TODOS':                       
            newState.productos = action.productos
            break
        case 'TRAER_COINCIDENTES':
            newState.productos = action.productos
            break
        default:
            return state
    }
    return newState
}