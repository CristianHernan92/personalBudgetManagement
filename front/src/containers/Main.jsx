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
            user:""
        }
    }

    componentDidMount(){
        axios.get("/user/get").then(res=>{
            this.setState({user:res.data})
        })
        .catch(err=>{
            alert("An error occurred !!!")
            alert(err)
        })       
    }

    render(){
        return <div className="Main" style={{display:'flex',flexDirection:'column'}}>            
                    {
                        this.state.user.id ?
                            <Menu loggedin={true}></Menu>
                            :
                            <Menu loggedin={false}></Menu>
                    }
                    <Redirect to="/home"/>
                    <Switch>                        
                        <Route path="/home" component={<Home userid={this.state.user.id}></Home>}></Route>
                        <Route path="/create" component={<Create userid={this.state.user.id}></Create>}></Route>
                        <Route path="/list" component={()=><List userid={this.state.user.id}></List>}></Route>
                        <Route path="/register" component={Register}></Route>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/logout" component={Logout}></Route>
                    </Switch>      
                </div>            
    }
}
 