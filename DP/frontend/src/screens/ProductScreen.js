import { useParams } from 'react-router-dom';

function ProductScreen() {
  //get product from URL and show it on the screen - hook react-router-dom (useParams)
  const params = useParams();
  const { slug } = params;

  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
}
export default ProductScreen;
