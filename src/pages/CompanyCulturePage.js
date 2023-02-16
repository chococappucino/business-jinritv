import { Col, Container, Row } from 'react-bootstrap';
import classes from './CompanyCulturePage.module.css';
import CompanyCulture from '../components/CompanyCulture/CompanyCulture';
import Footer from '../components/Footer/Footer';

const CompanyCulturePage = () => {
  return (
    <>
      <Container
        fluid
        className="p-0 m-0"
        style={{ backgroundColor: 'rgb(50 50 50)' }}
      >
        <Row>
          <Col>
            <h1>COMPANY CULTURE</h1>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default CompanyCulturePage;
