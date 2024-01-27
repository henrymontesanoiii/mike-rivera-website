import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FadeIn from 'react-fade-in';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import './Contact.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';



 const Contact = () => {
  
  
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const form = useRef();

  const checkValues = (e) => {
    // the 2 lines below will stop the default form submit action
     e.preventDefault();
     e.stopPropagation();
     let name = document.getElementById("name").value;
     let email = document.getElementById("email").value;
     let number = document.getElementById("number").value;
     let message = document.getElementById("message").value;

     if (!name) {
       alert("Please fill in name field");
     }
     else if (!email) {
      alert("Please fill in email field");
    }else if (!message) {
      alert("Please fill in message field");
    }else if (!number) {
      alert("Please fill in phone number field");
    }else {
      sendEmail(e);
     }
   }
  const sendEmail = (e) => {
    handleShow();
    e.preventDefault();

    emailjs.sendForm('service_a40msgt', 'template_lq65n6o', form.current, 'AVrErWOAqfNNJiC-Y')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <Container>
    <FadeIn>
      <Col >
      <br></br>
      <center><h1><strong>Contact Us!</strong></h1></center>
      <form ref={form} onSubmit={checkValues}>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Email Sent!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your email was successfully sent! We will respond ASAP!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label for="from_name">Name</Form.Label>
        <Form.Control type="name" id = "name" name="from_name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label for="from_email">Email address</Form.Label>
        <Form.Control type="email" id = "email" name="from_email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label for="from_number">Phone Number</Form.Label>
        <Form.Control type="tel" id = "number" name="from_number" />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <textarea name="message" id = "message" rows={10}/>
      <br></br>
      <center><Button type="submit" value="Send">
        Submit
      </Button></center>
      </form>
      </Col>
    </FadeIn>
    </Container>
  );
}

export default Contact;