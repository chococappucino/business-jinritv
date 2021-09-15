import CustomCarousel from './CustomCarousel';
import { carouselList } from '../../store/data';
import classes from './Carousel.module.css';

const Carousel = () => {
  return (
    <div className={classes.Carousel}>
      <h1 className={classes.Title}>What People Say</h1>
      <CustomCarousel items={carouselList} />
    </div>
  );
};

export default Carousel;
