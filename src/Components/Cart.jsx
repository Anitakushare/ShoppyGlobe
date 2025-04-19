import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react'; 
import { selectCartItems } from '../Utils/Selector';

const Cart = () => {
  const cartItems = useSelector(selectCartItems) || []; 

  return (
    <div className="relative">
     
      <Link to="/CartItem" className="text-gray-900 hover:text-gray-700 transition">
        <ShoppingCart className="w-8 h-8" />
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-[#E23C84] text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
            {cartItems.length}
          </span>
        )}
      </Link>
    </div>
  );
};

export default Cart;
