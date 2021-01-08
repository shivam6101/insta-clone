import React from 'react'

const Home=()=> {
    return (
        <div className="home">
            <div className="card home-card">
                <h5>Rohan Tanwar</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1543086989-04d876643fa5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJlc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                </div>
                <div className="card-content">
                    <h6>Title</h6>
                    <p>This image is lit</p>
                    <input type="text" placeholder="Add a comment" />
                </div>
            </div>

            <div className="card home-card">
                <h5>Rohan Tanwar</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1543086989-04d876643fa5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJlc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                </div>
                <div className="card-content">
                <i className="material-icons" style={{color:"red"}}>favorite</i>
                    <h6>Title</h6>
                    <p>This image is lit</p>
                    <input type="text" placeholder="Add a comment" />
                </div>
            </div>
        </div>
    )
}

export default Home
