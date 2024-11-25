import React from 'react';
import Col from 'react-bootstrap/Col';
import banner from "../images/banner.png"
import FadeIn from 'react-fade-in';
import Container from 'react-bootstrap/Container';

class Team extends React.Component {
  render() {
    return (
      <div>
      <FadeIn>
        <Col >
          <center><h1><strong>About Me</strong></h1></center>
          <br></br>
          <h5><strong>Mike Rivera CPA</strong> is a small accounting firm run by its owner based out of Chatham, NJ. He provides a wide array of accounting, financial, tax and excel services to individuals, small businesses and not for profits.</h5>
          <br></br>
          <h5>
            <strong>Mike Rivera, CPA</strong> is the managing member of Mike Rivera CPA. He has more than fifteen years experience in accounting. Mike Rivera graduated from Rowan University in 2009 and has since worked in commercial and residential real estate accounting and prepared tax returns part time. In 2018, he decided to shift his focus entirely to providing tax and other accounting services. He has his Master's from Excel University, Inc. and offers consulting services catered to individual and business needs as it relates to Microsoft Excel.</h5>
          <center><img
            src={banner}
            max width="100%"
                
                height="auto"

            alt="Logo"
          /></center>
        </Col>
      </FadeIn>
      </div>
    )
  }
}

export default Team;