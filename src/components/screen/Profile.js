import React from 'react'

const Profile=()=> {
    return (
        <div style={{maxWidth:"550px",margin:"0px auto"}}>
            <div style={{
                display:"flex",
                justifyContent:"space-around",
                margin:"18px 0px",
                border:"1px solid grey"
            }}>
                <div>
                    <img style={{width:"160px",height:"160px",borderRadius:"80px",marginTop:"15px"}}
                     src="https://images.unsplash.com/photo-1536685504786-2f9fb5014e15?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cHJlc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                </div>
                <div>
                    <h4>Shivam Semwal</h4>
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                        <h6>40 posts</h6>
                        <h6>Following</h6>
                        <h6>Follower</h6>
                    </div>
                </div>
                
            </div>
            <div className="gallary">
                <img className="item" src="https://images.unsplash.com/photo-1536685504786-2f9fb5014e15?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cHJlc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                <img className="item" src="https://images.unsplash.com/photo-1536685504786-2f9fb5014e15?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cHJlc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                <img className="item" src="https://images.unsplash.com/photo-1536685504786-2f9fb5014e15?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cHJlc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                <img className="item" src="https://images.unsplash.com/photo-1536685504786-2f9fb5014e15?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cHJlc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                <img className="item" src="https://images.unsplash.com/photo-1536685504786-2f9fb5014e15?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cHJlc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                <img className="item" src="https://images.unsplash.com/photo-1536685504786-2f9fb5014e15?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cHJlc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                <img className="item" src="https://images.unsplash.com/photo-1536685504786-2f9fb5014e15?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cHJlc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
            </div>
        </div> 
    )
}

export default Profile
