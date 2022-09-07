import { Col, Container, Row } from 'react-bootstrap';
import YoutubeSubButton from './SocialButton/YoutubeSubButton';
import classes from './SocialMedia.module.css';

const SocialMedia = () => {
  return (
    <Container className={classes.SocialMedia}>
      <Row>
        <Col>
          <h1 className={classes.Title}>Follow us on our Social Media</h1>
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        <Col md={{ span: 4, offset: 1 }}>
          <YoutubeSubButton channelId="UCUNtzYHmJ6ILcMKAOSiUSgQ" />
        </Col>
        <Col md={{ span: 4, offset: 1 }}>
          <YoutubeSubButton channelId="UC37gvZkOKFzPaUNlK1sB7pg" />
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        <Col md={{ span: 4, offset: 1 }}>
          <YoutubeSubButton channelId="UCjo--O60H3pFIqd4Msi9IXw" />
        </Col>
        <Col md={{ span: 4, offset: 1 }}>
          <YoutubeSubButton channelId="UCPuz9xFPlsDzZ84XCshq8ow" />
        </Col>
      </Row>
    </Container>
  );
};

export default SocialMedia;
