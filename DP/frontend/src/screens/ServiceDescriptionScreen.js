import axios from 'axios';
import { useContext, useEffect, useReducer } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Rating from '../components/Rating';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { getError } from '../utils';

const reducer = (state, action) => {
  switch (action.type) {
    // starting to send ajax request
    case 'FETCH_REQUEST':
      // keep previous state and set loading
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      // update products with the data coming from the action
      return { ...state, service: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
function ServiceDescriptionScreen() {
  //get product from URL and show it on the screen - hook react-router-dom (useParams)
  const params = useParams();
  // const navigate = useNavigate();
  const { slug } = params;
  const [{ loading, error, service }, dispatch] = useReducer(reducer, {
    service: [],
    loading: true,
    error: '',
  });
  //  2nd parameter, array is empty as we use it to run the function in useEffect only once after rendering this component
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        // getting axios.get to send an ajax request
        const result = await axios.get(`/api/services/slug/${slug}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };
    fetchData();
    // when user switch between pages, fetch data will dispatch and we get news data from backend
    // slug below is a dependency
  }, [slug]);

  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div>
      {' '}
      <div>
        <Row>
          <Col md={4}>
            <img
              className="img-large"
              src={service.image}
              alt={service.name}
            ></img>
          </Col>

          <Col md={5}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Helmet>
                  <title>{service.name}</title>
                </Helmet>
                <h1>{service.name}</h1>
              </ListGroup.Item>
              <ListGroup.Item></ListGroup.Item>
              {/* <ListGroup.Item>Price : ${service.price}</ListGroup.Item> */}
              <ListGroup.Item>
                Description:
                <p>{service.description}</p>
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={3}>
            <Card>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      {/* <Col>Price:</Col>
                      <Col>${service.price}</Col> */}
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <div className="d-grid">
                      <Button variant="primary">Book A Visit</Button>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default ServiceDescriptionScreen;
