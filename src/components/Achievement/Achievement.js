import { Button, Col, Container, Row } from 'react-bootstrap';
import AchievementItem from './AchievementItem';

const Achievement = () => {
  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <h1 className="text-center font-weight-bold">
            What we have achieved
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <AchievementItem
            value="9K+"
            valueColor="#ffeae8"
            description="Followers on Twitch"
          />
        </Col>
        <Col>
          <AchievementItem
            value="383K+"
            valueColor="#ecdbff"
            description="Twitch Channel Views"
          />
        </Col>
        <Col>
          <AchievementItem
            value="1.8K+"
            valueColor="#d4edee"
            description="Views on Twitch Clip"
          />
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <Button variant="outline-dark" className="rounded-pill">
            Follow JinriTV
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Achievement;
