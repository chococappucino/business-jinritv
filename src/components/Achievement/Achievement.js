import { Button, Col, Container, Row } from 'react-bootstrap';
import AchievementItem from './AchievementItem';
import classes from './Achievement.module.css';

import { twitchLink } from '../../store/data';

const Achievement = () => {
  const buttonClickedHandler = () => {
    window.open(twitchLink);
  };

  return (
    <Container fluid className={classes.Achievement}>
      <Row>
        <Col>
        <div className={classes.SubBanner}>
          <h1 className={classes.Title}>What we have achieved</h1>
        </div>
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
            description="Views on Twitch Clips"
          />
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <Button
            variant="warning"
            className="rounded-pill"
            onClick={buttonClickedHandler}
          >
            Follow JinriTV
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Achievement;
