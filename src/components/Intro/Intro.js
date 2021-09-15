import { Col, Container, Row } from 'react-bootstrap';
import classes from './Intro.module.css';

const Intro = props => {
  return (
    <Container className={classes.Intro}>
      <Row className={classes.ImageWrapper}>
        <Col>
          <img src={props.data.image} alt="" className={classes.ImageBg}></img>
        </Col>
        <Col className={classes.Text}>
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
