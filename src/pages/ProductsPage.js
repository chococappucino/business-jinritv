import { Col, Container, Row } from 'react-bootstrap';
import Products from '../components/Products/Products';


const ProductsPage = () => {
  return (
    <>
      <Container
        fluid
        className="p-0 m-0"
        style={{ backgroundColor: 'rgb(50 50 50)' }}
      >
        <Row>
          <Col>
            <Products />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductsPage;