import React from 'react'
import {connect} from 'react-redux'
import {createandupdatelasttenoperations} from '../store/actioncreators/index'


class Form extends React.Component{
    constructor(props){
        super(props)
        this.onClick=this.onClick.bind(this)
    }

    onClick(e){
        e.preventDefault()        
        if((e.target[0].value&&e.target[1].value&&e.target[2].value&&e.target[3].value)!="")
        {
            if(isNaN(e.target[1].value)){
                alert("Ingress a valid mount !!!")
            }else{
                this.props.createandupdatelasttenoperations({concept:e.target[0].value,amount:e.target[1].value,date:e.target[2].value,type:e.target[3].value}).then(()=> {alert("Creation success !!!");window.location.assign("/")})
            }
        }
        else{
            alert("Fill all fields !!!")
        }
        
    }

    render(){
        return <form style={{display: 'flex',flexDirection: 'column'}} onSubmit={this.onClick}>
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
}

const mapDispatchToProps=(dispatch)=>{
    return {
        createandupdatelasttenoperations: createandupdatelasttenoperations(dispatch)
    }
}

export default connect(null,mapDispatchToProps)(Form)