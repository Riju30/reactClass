import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (prop) => {
    let {home,about ,menu}=prop
    return (
        <>
            <nav style={{padding:"10px 0 10px 0", backgroundColor:"black",color:"white"}}>
                <Link style={{margin:"0 15px 0 15px" , textDecoration:"none" ,color:"white"}} to="/">{home}</Link>
                <Link style={{margin:"0 15px 0 15px" , textDecoration:"none" ,color:"white"}} to="/about">{about}</Link>
                <Link style={{margin:"0 15px 0 15px" , textDecoration:"none" ,color:"white"}} to="/menu">{menu}</Link>
            </nav>
        </>
    )
}

export default Navbar