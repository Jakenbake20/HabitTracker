import React,{useState} from "react"
import {Button, Modal,Row, Col, Form} from "react-bootstrap"
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

          <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
     <Row className="justify-content-md-center">
       <Col xs={8}>    <Form.Control type="text" placeholder="Enter Username"   name="username" value={props.username} onChange={props.handleInputChange}/>

       </Col>
     </Row>

    
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Row className="justify-content-md-center">
      <Col xs={8}>
      <Form.Control  name="password"  value={props.password} onChange={props.handleInputChange}  type="password" placeholder="Password" />

      </Col>
    </Row>
  </Form.Group>
   
  <Button  onClick={props.handleLogin} variant="primary" type="submit">
    Submit
  </Button>
</Form>
{/*           
        <Row>
          <Col xs={3}>
          Username:
          </Col>
          <Col xs={8}> 
         <input name="username" value={props.username} onChange={props.handleInputChange} className="nput"/> 

          </Col>
             
              </Row>

              <Row>
                <Col  xs={8}>
                Password: <input name="password" type="password" value={props.password} onChange={props.handleInputChange} className="nput"/><br/>
            
                
                </Col>
              </Row>
              <Row>
                <Col>
                <button onClick={props.handleLogin}>Log In</button>
                </Col>
                </Row> 
              */}
                
                <Modal.Footer>

          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default Login