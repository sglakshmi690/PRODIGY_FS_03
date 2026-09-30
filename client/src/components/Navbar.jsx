import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
 
function Navbar() {
  const { cartItems } = useCart();
  const itemCount = cartItems.reduce((sum, item) => sum + item.qty, 0);
 
  return (
    <nav className='navbar'>
      <Link to='/' className='logo'>FRESH MART</Link>
      <Link to='/cart' className='cart-link'>Cart ({itemCount})</Link>
    </nav>
  );
}
 
export default Navbar;
