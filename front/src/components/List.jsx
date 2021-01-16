import React from 'react'
import {connect} from 'react-redux'

import {bringallentryes,bringallegresses} from '../store/actioncreators/index'

class List extends React.Component{

    componentDidMount(){
        this.props.bringallentryes()
        this.props.bringallegresses()
    }

    render(){
        return <div style={{display:'flex'}}>
                    <div style={{width:'50%'}}>
                    <h1 style={{textAlign:'center'}}>Entryes</h1>
                        {this.props.entryes.entryes.map(entry=>{
                            return <ol key={entry.id} style={{listStyle:'none'}}>
                                    <li>{entry.concept}</li>
                                    <li>{entry.amount}</li>
                                    <li>{entry.date}</li>
                                </ol>
                        })}                           
                    </div>
                    <div style={{width:'50%'}}>
                        <h1 style={{textAlign:'center'}}>Egresses</h1>
                        {this.props.egresses.egresses.map(egress=>{
                                return <ol key={egress.id} style={{listStyle:'none'}}>
                                        <li>{egress.concept}</li>
                                        <li>{egress.amount}</li>
                                        <li>{egress.date}</li>
                                    </ol>
                        })}
                    </div>
                </div>
    }
}

const mapStateToProps=(state)=>{
    return {
        entryes: state.entryes,
        egresses: state.egresses
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        bringallentryes: bringallentryes(dispatch),
        bringallegresses: bringallegresses(dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(List)

