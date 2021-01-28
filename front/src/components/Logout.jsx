import React from 'react'
import axios from 'axios'
import logo from '../../utils/loading.gif'

export default ()=>{
    function logout(){
        axios.get("/user/logout").then(()=>{
            window.location.assign('/')
        })
        .catch(err=>{
            alert("An error occurred !!!")
            window.location.assign('/')
        })
    }

    return <div style={{display:'flex',flexDirection:'column',alignItems:'center',paddingTop:'1%'}}>        
        <img src={logo} alt=""/>
        <p>Loggin out !!!</p>
        {logout()}
    </div>
}