import React from 'react'
import axios from 'axios'
import logo from '../../utils/loading.gif'


export default class Login extends React.Component{
    constructor(props){
        super(props)
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
        let inputemail = e.target.children[1].children[0].children[0]
        let inputpassword = e.target.children[1].children[0].children[1]
        if((inputemail.value&&inputpassword.value)=="")
            alert("Fill all fields !!!")
        else if (inputemail.value.includes(".com")===false)
            alert("Complete the email !!!")
        else{
            e.target.children[1].children[0].children[2].children[0].disabled=true
            e.target.children[1].children[0].children[2].children[1].disabled=true
            e.target.children[1].children[0].children[2].children[2].style.display=''
            axios.post("/user/login",{email:inputemail.value,password:inputpassword.value})
            .then((res)=>{
                if(res.data.message){
                    alert(res.data.message)
                    e.target.children[1].children[0].children[2].children[2].style.display='none'
                    e.target.children[1].children[0].children[2].children[0].disabled=false
                    e.target.children[1].children[0].children[2].children[1].disabled=false                    
                }                    
                else{
                    alert("Login success !!!")
                    window.location.replace('/');
                }
            })                
            .catch(err=>{
                alert("An error occurred !!!")
                window.location.reload()
            })
        }
            
    }

    render(){
        return <div style={{display: 'flex',justifyContent:'center',paddingTop:'2%'}}>
        <div style={{display: 'flex',width:'100%'}}>     
            <form style={{display: 'flex',width:'100%'}} onSubmit={this.onClickSubmit}>
                    <div style={{width:'45%',display:'flex',justifyContent:'flex-end',marginRight:'1%'}}>
                        <div style={{display:'flex',flexDirection:'column'}}>
                            <label style={{paddingTop: '2%'}}>Email: </label> 
                            <label style={{paddingTop: '2%'}}>Password: </label>                                               
                        </div>                    
                    </div>
                    <div style={{width:'55%',display:'flex',flexDirection:'column'}}>
                        <div style={{width:'30%',display:'flex',flexDirection:'column'}}>
                            <input type="email"/>
                            <input type="password"/>
                            <div style={{marginTop: '2%',display:'flex'}} >
                                <input type="submit" value="Login"/>
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