import React,{useState,useEffect} from 'react'
import {Link,useHistory} from "react-router-dom"
import M from "materialize-css"
const Createpost=()=> {
    const history=useHistory()
    const [title,settitle]=useState("")
    const [body,setbody]=useState("")
    const[image,setimage]=useState("")
    const[url,seturl]=useState("")

    useEffect(()=>{
        if(url){
            fetch("/createpost",{
                method:"post",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":"Bearer "+localStorage.getItem("jwt")
                },
                body:JSON.stringify({
                    title,
                    body,
                    pic:url
                })
                }).then(res=>res.json())
                .then(data=>{
                    if(data.error){
                        M.toast({html:data.error,classes:"#c62828 red darken-3"})
                    }
                    else{
                        localStorage.setItem("jwt",data.token)
                        localStorage.setItem("user",JSON.stringify(data.user))
                        M.toast({html:"Sucessfull posted",classes:"#43a047 green darken-1"})
                        history.push('/')
                    }
                })
                .catch(err=>{
                    console.log(err);
                })
        }
    },[url])
    const postdetails=()=>{
        const data=new FormData()
        data.append("file",image)
        data.append("upload_preset","insta-clone")
        data.append("cloud_name","dgl6baeh6")
        fetch("	https://api.cloudinary.com/v1_1/dgl6baeh6/image/upload",{
            method:"post",
            body:data
        })
        .then(res=>res.json())
        .then(data=>{
            seturl(data.url)
        })
        .catch(err=>{
            console.log(err)
        })

    }
    return (
        <div className="card input-field" style={{
            margin:"30px auto",
            maxWidth:"500px",
            padding:"10px",
            textAlign:"center"
        }}>
            <input type='text' placeholder="title" value={title} onChange={(e)=>settitle(e.target.value)}/>
            <input type='text' placeholder="body" value={body} onChange={(e=>setbody(e.target.value))}/>
            <div className="file-field input-field">
                <div className="btn #448aff blue darken-1">
                    <span>Upload Image</span>
                    <input type="file" onChange={(e)=>setimage(e.target.files[0])}/>
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                </div>
            </div>
            <button class="btn waves-effect waves-light #448aff blue darken-1" onClick={()=>postdetails()}>Submit Post
                </button>
        </div>
    )
}

export default Createpost
