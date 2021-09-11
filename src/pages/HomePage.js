import { Col, Container, Row } from 'react-bootstrap';
import Banner from '../components/Banner/Banner';
import Intro from '../components/Intro/Intro';
import Achievement from '../components/Achievement/Achievement';
import CustomCarousel from '../components/Carousel/CustomCarousel';
import SocialMedia from '../components/SocialMedia/SocialMedia';
import JoinCompany from '../components/JoinCompany/JoinCompany';
import Footer from '../components/Footer/Footer';
import { jinriIntro, imageCarouselList, textCarouselList } from '../store/data';

const HomePage = () => {
  return (
    <>
      <Container fluid className="p-0 m-0">
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
        <Row className="p-5 mt-3" style={{ backgroundColor: '#F2A7D0' }}>
          <h1 className="text-center">What People Say</h1>
          <CustomCarousel items={textCarouselList} type="Text" />
        </Row>
        <Row className="d-flex justify-content-center mt-3">
          <div className="w-50">
            <h1 className="text-center">Main Contents</h1>
            <CustomCarousel items={imageCarouselList} type="Image" />
          </div>
        </Row>
        <Row>
          <Col>
            <SocialMedia />
          </Col>
          <Col>
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
