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
        <h1 className={classes.TitleText}>KNOWLEDGE IS FULLY GAINED</h1>
        <p className={classes.DescriptionText}>
        Here you are hired as an unpaid intern in JinriCo
        </p>
        <Button
          className={`rounded-pill ${classes.JinritvBtn}`}
          onClick={buttonClickedHandler}
        >
            Go watch JinriTV
        </Button>
      </div>
    </div>
  );
};

export default Banner;
