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

                <div className="container-fluid" id="register">

                    <div className="input-group mb-3">      
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Choose your Username!</span>
                        </div>
                        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                    </div>

                </div>






                <footer id="footer">
                    <div className="inner">
                        <h2>Habit Tracker</h2>
                    </div>
                    <div className="copyright">
                        &copy; Copyrighted by Habit Tracker <p>Leo | Jacob | Drew | Adison | Austin</p>
                    </div>
                </footer>
            </>
        )
    }

}

export default Register