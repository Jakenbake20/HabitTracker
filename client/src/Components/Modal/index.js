import React,{useState} from "react"
import {Button, Modal} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
function Login(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow} className="button alt" id="modalpop">
          Log In
        </Button>
  
        <Modal show={show} onHide={handleClose}><br/><br/>
          <Modal.Header closeButton>
            <Modal.Title>Log In</Modal.Title>
          </Modal.Header>
          <Modal.Body>Enter your log in info here</Modal.Body><br/>
          

              Username: <input name="username" value={props.username} onChange={props.handleInputChange} className="nput"/> <br/>
              Password: <input name="password" value={props.password} onChange={props.handleInputChange} className="nput"/><br/>
                <button onClick={props.handleLogin}>Log In</button>
                <Modal.Footer>

          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default Login