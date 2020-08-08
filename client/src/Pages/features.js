import React, { Component } from "react"
import Navbar from "../Components/Navbar"
import { Button, ButtonToolbar } from "react-bootstrap"
import LoginModal from "../Components/Modal/LoginModal"
import API from "../utils/api"
import Login from "../Components/Modal"

class Features extends Component {

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

                <div class="row">
                    <div class="col-sm-8" id="featureleft">
                        <h2 className="lefth2">Develop Good Habits</h2>
                        <p className="leftp">Pick the habits and goals that are important to you! Don't pick what you want to accomplish
                        based on what other people deem important. Being more happy and productive starts here! </p>
                        
                    </div>
                
                    <div class="col-sm-4" id="featureright">
                        <img className="featpic" src="/images/yoga.jpg"></img>
                        
                    </div>
                </div>

<br/> <br/>

                <div class="row">
                    <div class="col-sm-8" id="featureleft">
                    <h2 className="lefth2">Keep those Habits</h2>
                        <p className="leftp">Feel the daily motivation that is re-fueled every time you mark off another task from your list. Move the goals
                        you pick to achieve from what you WANT to accomplish to what you HAVE accomplished.</p>
                    </div>
                 
                    <div class="col-sm-4" id="featureright">
                        <img className="featpic" src="/images/thumbs.jpg"></img>
                    </div>
                </div>

                <br/> <br/>

                <div class="row">
                    <div class="col-sm-8" id="featureleft">
                    <h2 className="lefth2">Leave your old habits behind</h2>
                        <p className="leftp">The more and more good habits you pick up and continue to do daily the less time you will 
                        have for the bad habits that were holding you back. No more getting in your own way. Only lifting yourself up</p>
                    </div>
                 
                    <div class="col-sm-4" id="featureright">
                        <img className="featpic" src="/images/rearview.jpg"></img>
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

export default Features