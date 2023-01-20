import { Col, Container, Row } from 'react-bootstrap';
import classes from './Product.module.css';

const Product = props => {
  return (
    <Container className={classes.Product}>
      <Row className={classes.ImageWrapper}>
        <Col className="col-lg-6 col-md-9">
          <img src={props.image} alt="" className={classes.Image}></img>
        </Col>
        <Col className="col-lg-6 col-md-3">
          <p className={classes.Subtitle}>
            {props.name}{' '}
            <a
              href={props.url}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.Url}
            >
              <i class="bi bi-box-arrow-up-right"></i>
            </a>
          </p>
          <p className={classes.Description}>{props.desc}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Product;
