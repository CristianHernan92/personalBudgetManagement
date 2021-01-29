import React from 'react'
import {connect} from 'react-redux'

import {updatelasttenoperations,bringtotals} from '../store/actioncreators/index'

class Home extends React.Component{

    convert(typeId){
        if(typeId==1)
         return "Entry"
        return "Egress" 
    }

    componentDidMount(){
        this.props.bringtotals()
        this.props.updatelasttenoperations()                        
    }

    render(){
        return <div style={{display:'flex',justifyContent:'space-around'}}>
                    <div style={{width:'50%'}}>
                        <ol>                         
                            {Object.keys(this.props.totals.totals).map(elemento=>{      
                                return <li key={elemento}>
                                    <h2>{elemento}(mount)</h2>
                                    <p>{this.props.totals.totals[elemento]}</p>
                                </li>
                            })}
                        </ol>                        
                    </div>
                    <div style={{width:'50%'}}>
                        <h1 style={{textAlign:'center'}}>Last ten registered</h1>
                        <div>
                        {this.props.operations.lasttenoperations.map(operation=>{
                            return <ol key={operation.id}>
                                    <li>
                                        {operation.concept}
                                    </li>
                                    <li>
                                        {operation.amount}
                                    </li>
                                    <li>
                                        {operation.date}
                                    </li>
                                    <li>
                                        {this.convert(operation.typeId)}
                                    </li>
                                </ol>
                        })}
                        </div>                        
                    </div>
                </div>                
    }
}

const mapStateToProps=(state)=>{
    return {        
        operations:state.operations,
        totals:state.totals
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        updatelasttenoperations: updatelasttenoperations(dispatch),
        bringtotals: bringtotals(dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)