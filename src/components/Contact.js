import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FadeIn from 'react-fade-in';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';



 const Contact = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a40msgt', 'template_lq65n6o', form.current, 'AVrErWOAqfNNJiC-Y')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <FadeIn>
      <br></br>
      <center><h1><strong>Contact Us!</strong></h1></center>
      <form ref={form} onSubmit={sendEmail}>
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
        <Form.Control type="name" name="from_name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label for="from_email">Email address</Form.Label>
        <Form.Control type="email" name="from_email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <textarea name="message" rows={8} cols={90}/>
      <br></br>
      <center><Button type="submit" value="Send" onClick={handleShow}>
        Submit
      </Button></center>
      </form>
    </FadeIn>
  );
}

export default Contact;