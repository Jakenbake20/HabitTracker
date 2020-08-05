import React from "react"
function Navbar () {
    return(
        <nav id="menu">
        <ul className="links">
            <li><a href="index.html">Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Other</a></li>
        </ul>
        <ul className="actions vertical">
            <li><a href="#" className="button fit">Login</a></li>
        </ul>
    </nav>
    )
}

export default Navbar