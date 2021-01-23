import React from 'react'
import {Route,Link, Switch} from 'react-router-dom'
import FormContainer from './FormContainer'
import List from '../components/List'
import Home from '../components/Home'

export default class Main extends React.Component{

    render(){
        return  <div className="Main" style={{display:'flex',height:'400px',flexDirection:'column'}}>            
                    <div className="menu" style={{background:'gainsboro',height:'10%',display:'flex',justifyContent:'space-around'}}>
                        <div style={{display:'flex',width:"50%",justifyContent:"center",alignSelf:'center'}}>
                            <Link to="/" style={{textDecoration:'none'}}>HOME</Link>
                        </div>
                        <div style={{display:'flex',width:"50%",justifyContent:"space-evenly",alignSelf:'center'}}>
                            <Link to="/create" style={{textDecoration:'none'}}>CREATE</Link>
                            <Link to="/list" style={{textDecoration:'none'}}>LIST</Link>
                        </div>                        
                    </div>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/create" component={FormContainer}></Route>
                        <Route path="/list" component={List}></Route>
                    </Switch>                    
                </div>            
    }
}
 