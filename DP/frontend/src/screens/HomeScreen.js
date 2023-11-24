// import data from '../data';
import axios from 'axios';
import logger from 'use-reducer-logger';
import { useEffect, useReducer } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../components/Product';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

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
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  //define a state to save products from the backend
  // useState function returns an array containing var(products) and function to update var(setProducts)
  // !!  remove usage of useState and replaced with useReducer below
  //   const [products, setProducts] = useState([]);
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
  });
  //  2nd parameter, array is empty as we use it to run the function in useEffect only once after rendering this component
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        // getting axios.get to send an ajax request
        const result = await axios.get('/api/products');
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
        <title>MediCare</title>
      </Helmet>
      <h1>Featured Products</h1>
      <div className="products">
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <Row>
            {products.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                <Product product={product}></Product>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
}
export default HomeScreen;
