import React from 'react'

import Form from '../components/Form'

export default ()=>{
    return <div style={{display: 'flex',justifyContent:'center',paddingTop:'2%'}}>
            <div style={{display: 'flex'}}>
                <div style={{display: 'flex',flexDirection: 'column',textAlign: 'end'}}>
                    <label style={{marginTop:'4%'}}>Concept:</label>
                    <label style={{marginTop:'4%'}}>Amount:</label>
                    <label style={{marginTop:'4%'}}>Date:</label> 
                    <label style={{marginTop:'4%'}}>Type:</label>                            
                </div>
                <Form></Form>
            </div>
            </div>
}
   