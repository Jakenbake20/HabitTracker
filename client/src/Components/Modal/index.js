import React,{useState} from "react"
import {Button, Modal} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
function Login(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Login
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>

              username: <input name="username" value={props.username} onChange={props.handleInputChange} /> <br/>
              password: <input name="password" value={props.password} onChange={props.handleInputChange} /><br/>
                <button onClick={props.handleLogin}>Log In</button>

            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default Login