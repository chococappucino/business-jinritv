import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import classes from './CustomCarousel.module.css';

const CustomCarousel = props => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const generateCarouselItems = () => {
    return props.items.map((item, index) => {
      return (
        <Carousel.Item key={index}>
          <span className={classes.CarouselSpan}>
            <img className={classes.CarouselImage} src={item.image} alt="" />
          </span>
          <Carousel.Caption>
            <h1>
              <span className={classes.Quote}>{item.quote}</span>
            </h1>
            <p>
              <span className={classes.Name}>{item.name}</span>
              <span className={classes.Location}>, {item.location}</span>
            </p>
            <p>
              <span className={classes.Title}>{item.title}</span>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} controls={false}>
      {generateCarouselItems()}
    </Carousel>
  );
};

export default CustomCarousel;
