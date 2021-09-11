import { Button } from 'react-bootstrap';

import classes from './Banner.module.css';

const Banner = () => {
  return (
    <div className={classes.Banner}>
      <div className={classes.TextPosition}>
        <h1 className={classes.TitleText}>Knowledge is Fully Gained</h1>
        <p className={classes.DescriptionText}>
          Here you are hired as an unpaid intern in JinriCo
        </p>
        <Button className="rounded-pill">Go watch JinriTV</Button>
      </div>
    </div>
  );
};

export default Banner;
