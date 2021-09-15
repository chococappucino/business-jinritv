import { Col, Container, Row } from 'react-bootstrap';
import Banner from '../components/Banner/Banner';
import Intro from '../components/Intro/Intro';
import Achievement from '../components/Achievement/Achievement';
import Carousel from '../components/Carousel/Carousel';
import SocialMedia from '../components/SocialMedia/SocialMedia';
import JoinCompany from '../components/JoinCompany/JoinCompany';
import Footer from '../components/Footer/Footer';
import { jinriIntro } from '../store/data';

const HomePage = () => {
  return (
    <>
      <Container
        fluid
        className="p-0 m-0"
        style={{ backgroundColor: 'rgb(216, 225, 232)' }}
      >
        <Row>
          <Col>
            <Banner />
          </Col>
        </Row>
        <Row>
          <Col>
            <Intro data={jinriIntro} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Achievement />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Carousel />
        </Row>
        <Row>
          <Col className="p-0">
            <SocialMedia />
          </Col>
          <Col className="p-0">
            <JoinCompany />
          </Col>
        </Row>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
