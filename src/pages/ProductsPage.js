import { Col, Container, Row } from 'react-bootstrap';
import classes from './ProductsPage.module.css';
import Product from '../components/Product/Product';
import Footer from '../components/Footer/Footer';
import { productList } from '../store/data';

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
            <h1 className={classes.Title}>PRODUCTS</h1>
          </Col>
        </Row>
        {productList.map(product => {
          return (
            <Row className="p-5">
              <Col>
                <Product
                  name={product.name}
                  desc={product.desc}
                  image={product.image}
                  url={product.url}
                />
              </Col>
            </Row>
          );
        })}
      </Container>
      <Footer />
    </>
  );
};

export default ProductsPage;
