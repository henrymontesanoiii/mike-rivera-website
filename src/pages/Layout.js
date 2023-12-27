import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import icon from "../images/mrh.png"
import hp from "../images/hppic.jpeg"
import testport from "../images/testport.png"
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';

const Layout = () => {
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
              <Nav.Link href="#/">Home</Nav.Link>
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
<br></br>
<br></br>
<br></br>
      <Container>
      <Row >
        <Col>
        <h1>Prepare for the future, by planning today.</h1>
        <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="1" title="Personal and Business Taxes">
      With over a dozen years of accounting experience, Mike Rivera CPA is prepared to provide you with financial freedom. Tax preparation and planning services are offered for any and all types of tax. Whether it be your individual return, partnership, corporation, estate, trust or other.
      </Tab>
      <Tab eventKey="2" title="Why do I need a CPA?">
      Title 26 of the United States Code, which governs federal taxes, has almost 10,000 sections. That does not even include the state tax code. CPAs have rigorous licensing requirements, culminating with four separate exams which must be passed within a year and a half of each other. Some of those exams have passage rates lower than 40%. Even after certification, CPAs are required to take continuing education credits to remain up to date with tax reform. All of this means that a CPA has the knowledge and ability to apply the rules to your unique situation. They are licensed experts that are held to a higher standard and must uphold a certain standard to the public.
      </Tab>
      <Tab eventKey="3" title="Free Consultation">
      See what Mike Rivera CPA can do for you. 
      There’s no commitment, pressure, or obligation.
      <br></br>
      <center><Button classvariant="primary">Start Now</Button>{' '}</center>
      
      </Tab>
    </Tabs>
        </Col>
        <Col>
        <img
              src={testport}
              width="450"
              height="450"
              alt="Logo"
            />
            </Col>
        </Row>
    </Container>
    </>
  )
};

export default Layout;