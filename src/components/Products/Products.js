import { Col, Container, Row } from 'react-bootstrap';
import classes from './Products.module.css';
import twiri from '../../assets/images/twiri.jpg';


const Products = props => {
  return (
    <Container className={classes.Products}>
        <Col className={classes.Text}>
            <h1 className={classes.Title}>PRODUCTS</h1>
        </Col>
        <Row className={classes.ImageWrapper}>
            <Col>
                <Row>
                    <Col>
                        <img src={twiri} className={classes.Image}></img>
                    </Col>
                    <Col>
                        <p className={classes.Subtitle}>Twiri</p>
                        <p className={classes.Description}>
                        This is a webpage that matches viewers/streamers to a streamer to watch or collab with based on the question for your preference. The questions will be regarding the characteristics and nature of the streamer and the stream.
                        This was Jinri's first product with more than 20+ viewers working on it simultaneously.
                        </p>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
  );
};

export default Products;