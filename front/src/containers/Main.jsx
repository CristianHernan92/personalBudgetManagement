import React from 'react'
import {Route,Link, Switch} from 'react-router-dom'
import FormContainer from './FormContainer'
import List from '../components/List'

export default class Main extends React.Component{

    render(){
        return  <div className="Main" style={{display:'flex',height:'400px',flexDirection:'column'}}>            
                    <div className="menu" style={{background:'gainsboro',height:'10%',display:'flex',justifyContent:'center'}}>
                        <div style={{display:'flex',width:"10%",justifyContent:"space-between",alignSelf:'center'}}>
                            <Link to="/create" style={{textDecoration:'none'}}>CREATE</Link>
                            <Link to="/list" style={{textDecoration:'none'}}>LIST</Link>
                        </div>
                    </div>
                    <Switch>
                        <Route exact path="/"></Route>    
                        <Route path="/create" component={FormContainer}></Route>
                        <Route path="/list" component={List}></Route>
                    </Switch>                    
                </div>            
    }
}
 