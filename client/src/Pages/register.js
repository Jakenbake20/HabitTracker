import React, { Component } from "react"
import Navbar from "../Components/Navbar"
import { Button, ButtonToolbar, Alert } from "react-bootstrap"
import LoginModal from "../Components/Modal/LoginModal"
import API from "../utils/api"
import Login from "../Components/Modal"

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = { deps: [],
             addModalShow: false, 
             username: "", 
             fullname: "", 
             email: "", 
             password: "",
              message:{
                  username:"",
                  fullname:"",
                  email: "",
                  password: ""

              }
            }
    }

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
        console.log(value)
    }
    submit = event => {
        console.log(this.state.username, this.state.fullname, this.state.email, this.state.password)
       if (this.state.fullname.length>0&&this.state.username.length>0
        &&this.state.email.length>0&&this.state.password.length>0){
            API.signup({
                name: this.state.fullname,
                email: this.state.email,
                password: this.state.password,
                username: this.state.username
            }).then(results=>{
                window.location.href="/user"
            })
        }else{
         this.setState({
             message:{
                username:"Username is required",
                fullname:"Your name is required",
                email: "An email is required",
                password: "A password is required"
             }
         })   
        }
      
    }
    handleLogin = event => {
        API.signin({ username: this.state.username, password: this.state.password }).then(results => {
            console.log(results)
            window.location.href="/user"
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


                <div className="container" id="container" >
                    <div className="container">
                        <h2 className="lefth2-reg">Register now!</h2>
                    </div>

                    <div className="input-group mb-3" >
                        <input type="text" className="form-control" name="username" value={this.state.username} onChange={this.handleInputChange} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                        <b style={{color: "red"}}>  {this.state.message.username}</b>
                    </div>
<br/>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" name="fullname" value={this.state.fullname} onChange={this.handleInputChange} placeholder="Name" aria-label="Name" aria-describedby="basic-addon1"></input>
                       <b style={{color: "red"}}> {this.state.message.fullname}</b>
                    </div>
                    <br/>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" name="email" placeholder="email" aria-label="email" value={this.state.email} onChange={this.handleInputChange} aria-describedby="basic-addon1"></input>
                        <b style={{color: "red"}}>{this.state.message.email}</b>
                    </div>
                    <br/>
                    <div className="input-group mb-3">
                        <input type="password" className="form-control" name="password" placeholder="password" value={this.state.password} onChange={this.handleInputChange} aria-label="password" aria-describedby="basic-addon1"></input>
                       <b style={{color: "red"}}> {this.state.message.password}</b>
                    </div>

                    <br></br>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <button onClick={this.submit} type="button" className="btn btn-dark" id="btmSub">Submit</button>
                            </div>

                            <div className="col" id="btm">
                                <a type="button" href="https://wutangclan.net/name-generator/"   id="btm-name">Name Ideas</a>
                            </div>
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

export default Register