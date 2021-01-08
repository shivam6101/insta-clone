import React from 'react'
import {Link} from "react-router-dom"
const Navbar=()=> {
    return (
        <nav>
            <div class="nav-wrapper white">
            <Link to="/" class="brand-logo left">Instagram</Link>
            <ul id="nav-mobile" class="right">
                <li><Link to="/signin">Login</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/Createpost">Createpost</Link></li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar
