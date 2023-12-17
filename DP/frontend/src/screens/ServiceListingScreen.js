import React from 'react';
// import data from '../data';
import axios from 'axios';
import logger from 'use-reducer-logger';
import { useEffect, useReducer } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Product from '../components/Product';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Service from '../components/Service';

// usereducer is prefereable over use state when there is
// complex state logic
const reducer = (state, action) => {
  switch (action.type) {
    // starting to send ajax request
    case 'FETCH_REQUEST':
      // keep previous state and set loading
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      // update products with the data coming from the action
      return { ...state, services: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function ServiceListingScreen() {
  //define a state to save products from the backend
  // useState function returns an array containing var(products) and function to update var(setProducts)
  // !!  remove usage of useState and replaced with useReducer below
  //   const [products, setProducts] = useState([]);
  const [{ loading, error, services }, dispatch] = useReducer(logger(reducer), {
    services: [],
    loading: true,
    error: '',
  });
  //  2nd parameter, array is empty as we use it to run the function in useEffect only once after rendering this component
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        // getting axios.get to send an ajax request
        const result = await axios.get('/api/services');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }

      //   setProducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      {' '}
      {/* Adding helmet package to change browser titles */}
      <Helmet>
        <title>Our Services</title>
      </Helmet>
      <h1>Featured Specializations</h1>
      <div className="products">
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <Row>
            {services.map((service) => (
              <Col key={service.slug} sm={6} md={4} lg={3} className="mb-3">
                <Service service={service}></Service>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
}

export default ServiceListingScreen;
