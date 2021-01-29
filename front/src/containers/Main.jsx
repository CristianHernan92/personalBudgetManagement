import React from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import axios from 'axios'

import Menu from '../components/Menu'
import Create from '../components/Create'
import List from '../components/List'
import Home from '../components/Home'
import Register from '../components/Register'
import Login from '../components/Login'
import Logout from '../components/Logout'

export default class Main extends React.Component{

    constructor(){
        super()
        this.state={
            user:{}
        }
    }

    componentDidMount(){
       axios.get("user/get").then(res=>{
           this.setState({user:res.data})
       })
       .catch(err=>{
           console.log(err)
       })
    }
   

    render(){
        return  this.state.user.id ?

                <div className="Main" style={{display:'flex',flexDirection:'column'}}>     
                    <Menu loggedin={true}></Menu>
                    <Redirect to='/home'></Redirect>
                    <Switch>                   
                        <Route path="/home" render={(props)=><Home {...props} ></Home>}></Route>
                        <Route path="/create" component={Create}></Route>
                        <Route path="/list" component={List}></Route>
                        <Route path="/logout" component={Logout}></Route>
                    </Switch>      
                </div>            

                :

                <div className="Main" style={{display:'flex',flexDirection:'column'}}>     
                    <Menu loggedin={false}></Menu>
                    <Redirect to='/welcome'></Redirect>
                    <Switch>                   
                        <Route path="/welcome" render={()=><h1>Welcome !!!</h1>}></Route>
                        <Route path="/register" component={Register}></Route>
                        <Route path="/login" component={Login}></Route>
                    </Switch>      
                </div>  
    }
}