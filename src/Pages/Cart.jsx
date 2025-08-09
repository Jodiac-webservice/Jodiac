import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Shopping Cart</h1>
      <button onClick={() => navigate('/')}>Go to Home</button>
    </div>
  );
};
export default Cart;