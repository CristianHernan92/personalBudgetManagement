import React from 'react'
import {connect} from 'react-redux'
import {createandupdatelasttenoperations} from '../store/actioncreators/index'
import logo from '../../utils/loading.gif'


class Create extends React.Component{
    constructor(){
        super()
        this.onClickSubmit=this.onClickSubmit.bind(this)
        this.onClickCancel=this.onClickCancel.bind(this)
    }

    onClickCancel(e){
        e.target.disabled=true
        e.target.parentNode.children[0].disabled=true
        e.target.parentNode.children[2].style.display=""
        this.props.history.push('/home')
    }

    onClickSubmit(e){        
        e.preventDefault()                
        console.log(this.props)

        /* if((e.target[0].value&&e.target[1].value&&e.target[2].value&&e.target[3].value)!="")
        {
            if(isNaN(e.target[1].value)){
                alert("Ingress a valid amount !!!")
            }else{
                e.target[4].disabled=true
                e.target[5].disabled=true
                e.target[4].parentNode.children[2].style.display=""
                this.props.createandupdatelasttenoperations({concept:e.target[0].value,amount:e.target[1].value,date:e.target[2].value,type:e.target[3].value,id:this.props.userid})
                .then(()=> {       
                    alert("Creation success !!!")                    
                    this.props.history.push('/home')
                })
                .catch(err=>{
                    alert("An error occurred !!!")
                    this.props.history.push('/home')                    
                })
            }
        }
        else{
            alert("Fill all fields !!!")
        } */
        
    }

    render(){
        return  <div style={{display: 'flex',justifyContent:'center',paddingTop:'2%'}}>
                    <div style={{display: 'flex',width:'100%'}}>     
                        <form style={{display: 'flex',width:'100%'}} onSubmit={this.onClickSubmit}>
                                <div style={{width:'45%',display:'flex',justifyContent:'flex-end',marginRight:'1%'}}>
                                    <div style={{display:'flex',flexDirection:'column'}}>
                                        <label style={{paddingTop: '5%'}}>Concept: </label>    
                                        <label style={{paddingTop: '5%'}}>Amount: </label>
                                        <label style={{paddingTop: '5%'}}>Date: </label> 
                                        <label style={{paddingTop: '5%'}}>Type: </label>                                               
                                    </div>                    
                                </div>
                                <div style={{width:'55%',display:'flex',flexDirection:'column'}}>
                                    <div style={{width:'30%',display:'flex',flexDirection:'column'}}>
                                        <input type="text" name="concept"/>
                                        <input type="text" name="amount"/>
                                        <input type="date" name="date"/>
                                        <select name="type">
                                                <option value=""></option>
                                                <option value="1">entry</option> 
                                                <option value="2">egress</option> 
                                        </select>
                                        <div style={{marginTop: '2%',display:'flex',height:'19%'}} >
                                            <input type="submit" value="Create"/>
                                            <input type="button" value="Cancel" onClick={this.onClickCancel}/>
                                            <img src={logo} alt="" style={{display:'none',width:'10%'}}/>
                                        </div>                                        
                                    </div>                    
                                </div>          
                        </form>
                    </div>
        </div>
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        createandupdatelasttenoperations: createandupdatelasttenoperations(dispatch)
    }
}

export default connect(null,mapDispatchToProps)(Create)