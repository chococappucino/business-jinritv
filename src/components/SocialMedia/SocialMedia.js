import { Col, Container, Row } from 'react-bootstrap';
import YoutubeSubButton from './SocialButton/YoutubeSubButton';

const SocialMedia = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Follow us on our Social Media</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <YoutubeSubButton channelId="UCUNtzYHmJ6ILcMKAOSiUSgQ" />
        </Col>
        <Col>
          <YoutubeSubButton channelId="UC37gvZkOKFzPaUNlK1sB7pg" />
        </Col>
      </Row>
    </Container>
  );
};

export default SocialMedia;
