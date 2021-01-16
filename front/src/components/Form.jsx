import React from 'react'
import axios from 'axios'


export default ()=>{
    function onClick(e){
        e.preventDefault()
        
        if((e.target[0].value&&e.target[1].value&&e.target[2].value&&e.target[3].value)!="")
        {
            if(isNaN(e.target[1].value)){
                alert("ingrese un monto valido")
            }else{
                axios.post("/operation/create/",{concept:e.target[0].value,amount:e.target[1].value,date:e.target[2].value,type:e.target[3].value})
            }
        }
        else{
            alert("Rellene todos los campos !!!")
        }
        
    }

    return <form style={{display: 'flex',flexDirection: 'column'}} onSubmit={onClick}>
                <input type="text" name="concept"/>
                <input type="text" name="amount"/>
                <input type="date" name="date"/>
                <select name="type">
                        <option value=""></option>
                        <option value="1">entry</option> 
                        <option value="2">egress</option> 
                </select>               
                <input type="submit" value="Create"/>                                
            </form>
}