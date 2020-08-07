import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./Pages/homepage"
import Register from "./Pages/register"
function App() {
  return (
      <Router>
           <Route  exact path = "/"  component = {Home}  />
           <Route exact path = "/register" component = {Register} />
          

      </Router>
      

  );
}

export default App;
