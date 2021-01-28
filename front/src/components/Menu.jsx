import React from 'react'
import {Link} from 'react-router-dom'

export default class Menu extends React.Component{

    render(){
        return <div className="menu" style={{background:'gainsboro',display:'flex',height:'50px'}}>
        <div style={{display:'flex',width:"50%",justifyContent:"center",alignSelf:'center'}}>
                <div style={{width:'85%'}}>
                    <Link to="/home" style={{textDecoration:'none'}}>HOME</Link>
                </div>         
        </div>
        <div style={{display:'flex',width:"50%",justifyContent:"flex-end",alignSelf:'center'}}>
                {this.props.loggedin ? 
                    <div style={{width:'100%',display:'flex',justifyContent:'space-between'}}>
                        <div style={{display:'flex',justifyContent:'space-between',width:'20%'}}>
                            <Link to="/create" style={{textDecoration:'none'}}>CREATE</Link>
                            <Link to="/list" style={{textDecoration:'none'}}>LIST</Link>
                        </div>                                        
                        <div style={{display:'flex',width:"30%",justifyContent:"space-evenly"}}>
                            <Link to="/logout" style={{textDecoration:'none'}}>LOG OUT</Link>
                        </div>
                    </div>                    
                    :                    
                    <div style={{display:'flex',width:"30%",justifyContent:"space-evenly"}}>
                        <Link to="/login" style={{textDecoration:'none'}}>LOGIN</Link>
                        <Link to="/register" style={{textDecoration:'none'}}>REGISTER</Link>
                    </div>                                                                     
                }                                                  
        </div>                     
    </div>
    }
}