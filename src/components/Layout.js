import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import icon from "../images/mrh.png"

class Layout extends React.Component{
  render(){
    return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>

          <Navbar.Brand href="#">
            <img
              src={icon}
              width="200"
              
              alt="Logo"
            /> </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" class="align-items-end">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="#action2">Team</Nav.Link>
              <NavDropdown title="Resources" id="navbarScrollingDropdown" drop={'start'}>
                <NavDropdown.Item href="#intuit">Intuit Document Upload</NavDropdown.Item>
                <NavDropdown.Item href="#irs">
                  IRS Link
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action5">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>

    </>
  )
  }
};

export default Layout;