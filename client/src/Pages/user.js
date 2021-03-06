import React, { Component } from "react"
import Navbar from "../Components/Navbar"
import { Button, ButtonToolbar } from "react-bootstrap"
import LoginModal from "../Components/Modal/LoginModal"
import API from "../utils/api"
import Login from "../Components/Modal"

class User extends Component {

    constructor(props) {
        super(props);
        this.state = { deps: [], addModalShow: false, username: "", fullname: "", email: "", password: "" }
    }

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
        console.log(value)
    }
    submit = event => {
        console.log(this.state.username, this.state.fullname, this.state.email, this.state.password)
        API.signup({
            name: this.state.fullname,
            email: this.state.email,
            password: this.state.password,
            username: this.state.username
        })
    }
    handleLogin = event => {
        API.signin({ username: this.state.username, password: this.state.password }).then(results => {
            console.log(results)
        })
    }
    render() {

        let addModalClose = () => this.setState({ addModalShow: false });
        return (
            <>
                <header id="header">
                    <a href="/" className="logo">Habit Tracker</a>
                    <nav className="left">
                        <a className="habitbox" href="/">
                            <p className="habit">H.T.</p>
                        </a>
                    </nav>

                    <Login handleInputChange={this.handleInputChange} handleLogin={this.handleLogin} username={this.state.username} password={this.state.password} />
                    <nav className="right">
                        <div className="modal">
                            <nav className="right">
                                <ButtonToolbar>
                                    <button className="button alt"
                                        onClick={() => this.setState({ addModalShow: true })}  >Log in</button>

                                    <LoginModal
                                        show={this.state.addModalShow}
                                        onHide={addModalClose}
                                    />
                                </ButtonToolbar>
                            </nav>
                        </div>
                    </nav>
                </header>
                <Navbar />


                <div className="container fluid">
                    <h1 className="dashboard">Hello {this.state.fullname}</h1>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-sm">
                            <h4 className="userinfo">Profile Info</h4>                            
                        </div>
                        <div class="col-sm">
                            <h4 className="userinfo">Your Goals Today</h4>
                        </div>
                        <div class="col-sm">
                            <h4 className="userinfo">The goals you've met</h4>
                        </div>
                    </div>
                </div>







                <footer id="footer">
                    <div className="inner">
                        <h2>Habit Tracker</h2>
                    </div>
                    <div className="copyright">
                        &copy; Copyrighted by Habit Tracker <p>Leo | Jacob | Drew | Austin</p>
                    </div>
                </footer>
            </>
        )
    }

}

export default User