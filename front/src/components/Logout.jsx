import React from 'react'
import axios from 'axios'
import logo from '../../utils/loading.gif'

export default ()=>{
    function logout(){
        axios.get("/user/logout").then(()=>{
            window.location.href='http://localhost:3000/'
        })
        .catch(err=>{
            alert("An error occurred !!!")
            window.location.href='http://localhost:3000/'
        })
    }

    return <div style={{display:'flex',flexDirection:'column',alignItems:'center',paddingTop:'1%'}}>        
        <img src={logo} alt=""/>
        <p>Loggin out !!!</p>
        {logout()}
    </div>
}