import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

import {bringallentries,bringallegresses} from '../store/actioncreators/index'

class List extends React.Component{

    onClickSendEdit(e){              
            let inputConcept=e.target.parentNode.children[0].children[0]
            let inputAmount=e.target.parentNode.children[0].children[1]
            let inputDate=e.target.parentNode.children[0].children[2]
            if(inputConcept.value===inputConcept.defaultValue&&inputAmount.value===inputAmount.defaultValue&&inputDate.value===inputDate.defaultValue)
                alert("You changed nothing !!!")
            else if(isNaN(inputAmount.value)){
                alert("Ingress a valid mount !!!")
            }else{
                axios.post("operation/update",{id:e.target.parentNode.parentNode.id,concept:inputConcept.value,amount:inputAmount.value,date:inputDate.value}).then(()=> {alert("Edition success !!!");window.location.assign("/")})
            }        
    }   

    onClickEdit(e){
        e.target.parentNode.style="display: none"
        e.target.parentNode.parentNode.children[1].style="display:''"       
    }  
    
    onClickCancel(e){
        e.target.parentNode.style="display: none"
        e.target.parentNode.parentNode.children[0].style="display:''"
        
    }   

    onClickDeleteEntrieOrEgress(id){        
        return ()=>{
            axios.post("/operation/delete",{id}).then(()=> {alert("Deletion success !!!");window.location.assign("/")})
        }
    }

    componentDidMount(){
        this.props.bringallentries()
        this.props.bringallegresses()
    }

    render(){
        return <div style={{display:'flex'}}>
                    <div style={{width:'50%'}}>
                    <h1 style={{textAlign:'center'}}>Entries</h1>
                        {this.props.entriesandegresses.entries.map(entry=>{
                            return <div key={entry.id} id={entry.id}>
                                    <div>
                                        <ol style={{listStyle:'none'}}>
                                            <li>{entry.concept}</li>
                                            <li>{entry.amount}</li>
                                            <li>{entry.date}</li>                                        
                                        </ol>                                    
                                        <input type="button" value="Delete" onClick={this.onClickDeleteEntrieOrEgress(entry.id)}/>
                                        <input type="button" value="Edit" onClick={this.onClickEdit}/>
                                    </div>
                                    <div style={{display:'none'}}>
                                        <div>
                                            <input type="text" defaultValue={entry.concept} style={{display:'block'}}/><input type="text" defaultValue={entry.amount} style={{display:'block'}}/><input type="date" defaultValue={entry.date} style={{display:'block'}}/>
                                        </div>                                        
                                        <input type="button" value="Edit" onClick={this.onClickSendEdit}/><input type="button" value="Cancel" onClick={this.onClickCancel}/>
                                    </div>
                                </div>                                                                
                        })}                           
                    </div>
                    <div style={{width:'50%'}}>
                        <h1 style={{textAlign:'center'}}>Egresses</h1>
                        {this.props.entriesandegresses.egresses.map(egress=>{
                            return <div key={egress.id} id={egress.id}>
                                    <div>
                                        <ol style={{listStyle:'none'}}>
                                            <li>{egress.concept}</li>
                                            <li>{egress.amount}</li>
                                            <li>{egress.date}</li>                                        
                                        </ol>                                    
                                        <input type="button" value="Delete" onClick={this.onClickDeleteEntrieOrEgress(egress.id)}/>
                                        <input type="button" value="Edit" onClick={this.onClickEdit}/>
                                    </div>
                                    <div style={{display:'none'}}>
                                        <div>
                                            <input type="text" defaultValue={egress.concept} style={{display:'block'}}/><input type="text" defaultValue={egress.amount} style={{display:'block'}}/><input type="date" defaultValue={egress.date} style={{display:'block'}}/>
                                        </div>                                        
                                        <input type="button" value="Edit" onClick={this.onClickSendEdit}/><input type="button" value="Cancel" onClick={this.onClickCancel}/>
                                    </div>
                                </div>                                
                        })}
                    </div>
                </div>
    }
}

const mapStateToProps=(state)=>{
    return {
        entriesandegresses:state.entriesandegresses
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        bringallentries: bringallentries(dispatch),
        bringallegresses: bringallegresses(dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(List)

