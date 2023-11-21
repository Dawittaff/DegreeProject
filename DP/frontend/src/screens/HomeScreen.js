import { Link } from 'react-router-dom';
// import data from '../data';
import axios from 'axios';
import logger from 'use-reducer-logger';
import { useEffect, useReducer } from 'react';
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
      <h1>Featured Products</h1>
      <div className="products">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error} </div>
        ) : (
          products.map((product) => (
            <div className="product" key={product.slug}>
              {/* Avoiding page refresh by adding Link instead of anchor href */}
              <Link to={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </Link>
              <div className="product-info">
                <Link to={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </Link>
                <p>
                  <strong>${product.price}</strong>
                </p>
                <button>Add to Cart</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
export default HomeScreen;
