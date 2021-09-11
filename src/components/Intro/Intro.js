import { Col, Container, Row } from 'react-bootstrap';
import classes from './Intro.module.css';

const Intro = props => {
  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <img src={props.data.image} alt="" className={classes.ImageBg}></img>
        </Col>
        <Col className="d-flex flex-column justify-content-center">
          <Row>
            <Col className={classes.Title}>{props.data.title}</Col>
          </Row>
          <Row>
            <Col className={classes.Subtitle}>{props.data.subtitle}</Col>
          </Row>
          <Row>
            <Col className={classes.Description}>{props.data.description}</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Intro;
