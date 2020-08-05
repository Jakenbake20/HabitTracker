import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./Pages/homepage"
function App() {
  return (
      <Router>
           <Route  exact path = "/"  component = {Home}  />

          

      </Router>
      

  );
}

export default App;
