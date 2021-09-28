import { Button } from 'react-bootstrap';
import classes from './Banner.module.css';

import { twitchLink } from '../../store/data';

const Banner = () => {
  const buttonClickedHandler = () => {
    window.open(twitchLink);
  };

  return (
    <div className={classes.Banner}>
      <div className={classes.TextPosition}>
        <h1 className={classes.TitleText}>Knowledge is Fully Gained</h1>
        <p className={classes.DescriptionText}>
          Here you are hired as an unpaid intern
        </p>
        <Button
          className="rounded-pill p-2"
          variant="outline-dark"
          onClick={buttonClickedHandler}
        >
          Go watch JinriTV
        </Button>
      </div>
    </div>
  );
};

export default Banner;
