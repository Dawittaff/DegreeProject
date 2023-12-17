import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { Store } from '../Store';
function Service(props) {
  const { service } = props;
  //   const { state, dispatch: ctxDispatch } = useContext(Store);
  //   const {
  //     cart: { cartItems },
  //   } = state;
  //   const addToCartHandler = async (item) => {
  //     const existItem = cartItems.find((x) => x._id === service._id);
  //     // if item exists, increase value by 1 else set it to 1
  //     const quantity = existItem ? existItem.quantity + 1 : 1;
  //     // get the current product detail from backend to update cart
  //     const { data } = await axios.get(`/api/products/${item._id}`);
  //     // ajax request

  //     if (data.countInStock < quantity) {
  //       window.alert('Sorry, the selected item is out of stock');
  //       return;
  //     }
  //     ctxDispatch({
  //       type: 'CART_ADD_ITEM',
  //       payload: { ...item, quantity },
  //     });
  //   };

  return (
    <Card>
      {/* Avoiding page refresh by adding Link instead of anchor href */}
      <Link to={`/service/${service.slug}`}>
        <img src={service.image} className="card-img-top" alt={service.name} />
      </Link>
      <Card.Body>
        <Link to={`/service/${service.slug}`}>
          <Card.Title>{service.name}</Card.Title>
        </Link>

        <Button variant="light">Check</Button>

        {/* <Button onClick={() => addToCartHandler(service)}>Add To Cart</Button> */}
      </Card.Body>
    </Card>
  );
}
export default Service;
