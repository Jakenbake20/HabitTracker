import React, {Component} from "react"
import Navbar from "../Components/Navbar"
import Register from "./register"
import Login from "../Components/Modal"
import {Modal, Button, Row, Col, form} from "react-bootstrap"
 
class Home extends Component{

    render() {
        return (
            <>
           

                <header id="header">
                <a href="/" className="logo">Habit Tracker</a>
                    <nav className="left">
                        <a className="habitbox" href="/"> 
                        <p className="habit">H.T</p>
                        </a>
                    </nav>
                    
                    <nav className="right">
                    
                        {/* <a href="#" className="button alt">Log in</a> */}
                    </nav>
                </header>
                <Navbar />
            
             

                <section id="banner">
                    <div className="content">
                        <h1>Habit Tracker</h1>
                        <p>Habit Tracker offers an unparrelel habit tracking experience to help you develop better habits and eliminate bad habits.</p>
                        <p>It also has a social element for even more motivation!</p>
                        <ul className="actions">
                            <li><a href="#one" className="button scrolly">Go to Features</a></li>
                            <li><a href="/register" className="button scrolly">Sign up now!</a></li>

                        </ul>
                    </div>
                </section>

                <section id="one" className="wrapper">
                    <div className="inner flex flex-3">
                        <div className="flex-item left">
                            <div>
                                <h3>Social</h3>
                                <p>Social offers a way of adding friends for <br /> more motivation and accountability.</p>
                            </div>
                            <div>
                                <h3>Habit Tracking Technology</h3>
                                <p>Our app offers a way of inputting<br />custom habits to target specific habit goals.</p>
                            </div>
                        </div>
                        <div className="flex-item image fit round">
                            <img src="https://uchealth-wp-uploads.s3.amazonaws.com/wp-content/uploads/sites/6/2018/02/06033645/cell-phones-1024x683.jpg" alt="" />
                        </div>
                        <div className="flex-item right">
                            <div>
                                <h3>User Friendly</h3>
                                <p>It's so user friendly eve your <br /> grandma could track her habits!</p>
                            </div>
                            <div>
                                <h3>100% customizable habits</h3>
                                <p>Habit Tracker offers a unique customizable<br /> habit tracking experience for the user</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="two" className="wrapper style1 special">
                    <div className="inner">
                        <h2>Why develop better habits?</h2>
                        <figure>
                            Developing better habits goes a long way when it comes to an increase in self-esteem and gives a big boost in happiness.
					</figure>
                    </div>
                </section>

                <section id="Bottom" className="wrapper">
                    <div className="inner flex flex-3">
                        <div className="flex-item box">
                            <div className="image fit">
                                <img src="#" alt="" />
                            </div>
                            <div className="content">
                                <h3>Good habits bring you closer to your goals</h3>
                                <p>The first step in acheiving any goal is to develop good habits. No matter if you want to run a marathon, get buff, or even get good at anything, you have to develop good habits that can attribute to the main goal.</p>
                            </div>
                        </div>
                        <div className="flex-item box">
                            <div className="image fit">
                                <img src="#" alt="" />
                            </div>
                            <div className="content">
                                <h3>Habits replace a lack of motivation</h3>
                                <p>When you develop habits not even lack of motivation can stop you from doing something that you've gotten your body and mind used to doing.</p>
                            </div>
                        </div>
                        <div className="flex-item box">
                            <div className="image fit">
                                <img src="#" alt="" />
                            </div>
                            <div className="content">
                                <h3>Good habits reduce wasted time</h3>
                                <p>Good habits can reduce time by being more effecient and productive with your time instead of wasting time doing usless things.</p>
                            </div>
                        </div>
                    </div>
                </section>


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

export default Home