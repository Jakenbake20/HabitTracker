import React, {Component} from "react"
import Navbar from "../Components/Navbar"

class Register extends Component {

    render() {
        return (
            <>
                <header id="header">
                    <nav className="left">
                        <a href="#menu"><span>Menu</span></a>
                    </nav>
                    <a href="index.html" className="logo">Habit Tracker</a>
                    <nav className="right">
                        <a href="#" className="button alt">Log in</a>
                    </nav>
                </header>
                <Navbar />

            </>
                    )
                    }

}

export default Register