import React, { Component } from "react"
import Navbar from "../Components/Navbar"
import { Button, ButtonToolbar } from "react-bootstrap"
import LoginModal from "../Components/Modal/LoginModal"


class Register extends Component {

    constructor(props) {
        super(props);
        this.state = { deps: [], addModalShow: false }
    }

    render() {

        let addModalClose = () => this.setState({ addModalShow: false });
        return (
            <>
                <header id="header">
                    <nav className="left">
                        <a href="#menu"><span>Menu</span></a>
                    </nav>
                    <a href="index.html" className="logo">Habit Tracker</a>
                    <nav className="right">
                        <div className="modal">
                            <ButtonToolbar>
                                <button className="loginBtn"
                                    onClick={() => this.setState({ addModalShow: true })}  >Log in</button>

                                <LoginModal
                                    show={this.state.addModalShow}
                                    onHide={addModalClose}
                                />
                            </ButtonToolbar>
                        </div>
                    </nav>
                </header>
                <Navbar />

            </>
        )
    }

}

export default Register