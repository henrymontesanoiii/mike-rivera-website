import React from "react";
import Home from "./components/Home";
import Team from "./components/Team";
import Contact from "./components/Contact";
import testport from "./images/testport.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import icon from "./images/mrh.png"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from "react";
import FadeIn from 'react-fade-in';
import insta from "./images/insta.png";
import './App.css'





function App() {
  const [active, setActive] = useState("Home")
  const startNow = startbutton => {setActive("Contact")}

  return (
    <div >
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
      <Navbar.Brand onClick={() => setActive("Home")}>
            <img
              src={icon}
              width="200"
              style={{ marginRight: '0.8rem' }}
              alt="Logo"
            /><a href="https://www.instagram.com/mikeriveracpa/?fbclid=IwAR0ouD0gxZ1_OKL-H-_XKNKAugOpy6d_eCg93E8wE9Jxjw0lA84NndslWn8" target="_blank" rel="noreferrer"><img
            src={insta}
            width="30"
            alt="insta"
          /></a></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
          <Nav.Link onClick={() => setActive("Home")}>Home</Nav.Link>
              <Nav.Link onClick={() => setActive("Team")}>Team</Nav.Link>
              <NavDropdown title="Resources" id="navbarScrollingDropdown" drop={'start'}>
                <NavDropdown.Item href="https://accounts.intuit.com/app/sign-in?app_group=ProConnectTaxOnline&asset_alias=Intuit.tax.shoebox.browser&redirect_uri=https%3A%2F%2Flink.intuit.com%2Faccountant%2Fhome%2F#%2Fclients/" target="_blank">Intuit Portal</NavDropdown.Item>
                <NavDropdown.Item href="https://www.irs.gov/" target="_blank">
                  IRS Link
                </NavDropdown.Item>
                <NavDropdown.Item href="https://www.nj.gov/treasury/taxation/" target="_blank">
                  NJ Division of Taxation
                </NavDropdown.Item>
                <NavDropdown.Item href="https://www.tax.ny.gov/" target="_blank">
                  NY Department of Taxation and Finance
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={() => setActive("Contact")}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
      <br></br>
      <FadeIn>
        <Container>
          <Row >
            <Col>
              {active === "Home" && <Home startNow={startNow}/>}
              {active === "Team" && <Team />}
              {active === "Contact" && <Contact />}
              
            </Col>

            <Col>
              <img
                src={testport}
                width="600"
                height="600"
                alt="Logo"
              />
            </Col>
          </Row>
        </Container>
      </FadeIn>
    </div>

  );
};

export default App;
