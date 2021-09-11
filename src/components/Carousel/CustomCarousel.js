import { useState } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import classes from './CustomCarousel.module.css';

const CustomCarousel = props => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const generateCarouselItems = () => {
    return props.items.map((item, index) => {
      if (props.type === 'Image') {
        return (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={item} alt="" />
          </Carousel.Item>
        );
      } else {
        return (
          <Carousel.Item key={index}>
            <Container className={`${classes.TextCarousel} p-5`}>
              <Row>
                <Col className={classes.Quote}>{item.quote}</Col>
              </Row>
              <Row>
                <Col className={classes.TextAlignCenter}>
                  <span className={classes.Name}>{item.name}</span>,
                  {item.location}
                </Col>
              </Row>
              <Row>
                <Col className={classes.TextAlignCenter}>{item.title}</Col>
              </Row>
            </Container>
          </Carousel.Item>
        );
      }
    });
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {generateCarouselItems()}
    </Carousel>
  );
};

export default CustomCarousel;
