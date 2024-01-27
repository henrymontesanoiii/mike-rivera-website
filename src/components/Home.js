import React from 'react';
import Container from 'react-bootstrap/Container';
import free from "../images/free.png"
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import FadeIn from 'react-fade-in';
import './Home.css';


 const Home =({startNow}) => {
  const handleClick = () => {
    startNow('Contact')
  }
  
    return (

      <Container>
        <FadeIn>
          <Col>
            <h1><strong>Prepare for the future by planning today.</strong></h1>
            <Tabs
              defaultActiveKey="profile"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="1" title="Personal and Business Taxes">
                With over fifteen years of accounting experience, Mike Rivera CPA is prepared to provide you with financial freedom. Tax preparation and planning services are offered for both businesses and individuals. Tax preparation services are available for any type of entity.
              </Tab>
              <Tab eventKey="2" title="Why do I need a CPA?">
                Title 26 of the United States Code, which governs federal taxes, has almost 10,000 sections. That does not even include the state tax code. CPAs have rigorous licensing requirements, culminating with four separate exams which must be passed within a year and a half of each other. Some of those exams have passage rates lower than 40%. Even after certification, CPAs are required to take continuing education credits to remain up to date with tax reform. All of this means that a CPA has the knowledge and ability to apply the rules to your unique situation. They are licensed experts that are held to a higher standard and must uphold a certain standard to the public.
              </Tab>
            </Tabs>
            <br></br>
            <div id="free">
              <img src={free} alt="free" width="500" style={{ opacity: 0.4 }} />
              <div id="cons">
                <center><h1><strong>Free Consultation</strong></h1>
                  <h4>See what Mike Rivera CPA can do for you.<br></br><br></br>
                    There’s no commitment, pressure, or obligation.</h4>
                  <br></br>
                  <Button classvariant="primary" onClick={handleClick}>Start Now</Button>{' '}</center>
              </div>
            </div>

          </Col>

        </FadeIn>
      </Container>
    )

};

export default Home;