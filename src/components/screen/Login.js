import React,{useState} from 'react'
import M from "materialize-css"
import {Link,useHistory} from "react-router-dom"
const Login=()=> {
    const history=useHistory()
    const[name,setname]=useState("")
    const[email,setemail]=useState("")
    const[password,setpassword]=useState("")
    const postdata=()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html:"invalid email",classes:"#c62828 red darken-3"})
            return
        }
        fetch("/signin",{
        method:"post",
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Barer "+localStorage.getItem("jwt")
        },
        body:JSON.stringify({
            name,
            password,
            email
        })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                M.toast({html:data.error,classes:"#c62828 red darken-3"})
            }
            else{
                localStorage.setItem("jwt",data.token)
                localStorage.setItem("user",JSON.stringify(data.user))
                M.toast({html:"Sucessfull",classes:"#43a047 green darken-1"})
                history.push('/')
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }
    return (
        <div className="mycard">
            <div className="card auth-card input-field">
                <h2>Instagram</h2>
                <input type="text" placeholder="Email" value={email} onChange={(e)=>setemail(e.target.value)} />
                <input type="text" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)} />
                <button class="btn waves-effect waves-light #448aff blue darken-1" onClick={()=>postdata()}>Login
                </button>
                <Link to="/Signup"><h5>Create Account</h5></Link>
            </div>
        </div>
    )
}

export default Login
