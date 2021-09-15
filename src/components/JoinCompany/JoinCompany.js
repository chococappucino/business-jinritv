import { Button, Col, Container, Row } from 'react-bootstrap';
import SignUpImage from '../../assets/images/sign-up.png';
import classes from './JoinCompany.module.css';

import { discordLink } from '../../store/data';

const JoinCompany = () => {
  const buttonClickedHandler = () => {
    window.open(discordLink);
  };

  return (
    <Container className={classes.JoinCompany}>
      <Row>
        <Col>
          <h1 className={classes.Title}>
            Yes, I want to join the company, Sign me up!
          </h1>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-3">
          <Button
            variant="outline-dark"
            className="rounded-pill"
            onClick={buttonClickedHandler}
          >
            Join the Company
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <img className={classes.SignUpImage} src={SignUpImage} alt=""></img>
        </Col>
      </Row>
    </Container>
  );
};

export default JoinCompany;
