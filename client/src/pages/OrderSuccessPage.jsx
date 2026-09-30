import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api/axios';
 
function OrderSuccessPage() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
 
  useEffect(() => {
    api.get(`/orders/${id}`).then((res) => setOrder(res.data)).catch(() => {});
  }, [id]);
 
  return (
    <div className='order-success'>
      <h2>Thank you! Your order has been placed.</h2>
      {order && (
        <div className='order-summary'>
          <p>Order ID: {order._id}</p>
          <p>Status: {order.status}</p>
          <p>Total: ₹{order.totalPrice}</p>
        </div>
      )}
      <Link to='/'>Continue shopping</Link>
    </div>
  );
}
 
export default OrderSuccessPage;
