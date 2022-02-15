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
          <h1 className={classes.Title}>What We have Achieved</h1>
        </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <AchievementItem
            value="10K+"
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
            font-family="Quicksand, sans-serif"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Achievement;
