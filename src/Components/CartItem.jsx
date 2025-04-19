import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct, updateQuantity } from "../Utils/productSlice";
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react'; 
import { selectCartItems } from '../Utils/Selector';

const CartItem = () => {
  const dispatch = useDispatch();

  //  Get cart items from Redux store
  const cartItems = useSelector(selectCartItems) || []; 

  //  Calculate subtotal for all items in the cart
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  //  Handle removing a product from cart
  const handleRemove = (id) => {
    dispatch(removeProduct(id));
  };

  // Handle quantity update for a cart item
  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  //  If the cart is empty, it show error message
  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <ShoppingCart className="w-12 h-12 text-gray-600 mb-4" />
        <h2 className="text-2xl font-semibold text-gray-700">Your Cart is Empty!</h2>
        <Link to="/" className="mt-4 text-[#E23C84] hover:underline">Back to Home</Link>
      </div> 
    );
  }

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-[#E0F7FA] to-[#FFFFFF]">
      {/*  Link to return to the homepage */}
      <Link to="/" className="inline-block bg-[#E23C84] text-white px-4 py-2 rounded mb-6 hover:bg-[#e23c63]  transition">
        ← HomePage
      </Link>

      {/*  Heading for the cart page */}
      <h1 className="text-xl md:text-4xl font-bold text-center mb-8">Your Shopping Cart</h1>

      <div className="flex flex-col lg:flex-row gap-8 w-full items-start justify-between">
        
        {/* Cart Table to list all items */}
        <div className="w-full lg:flex-1 border border-gray-300 rounded-lg p-4 shadow overflow-x-auto">
          <table className="w-full text-left min-w-[600px]">
            <thead>
              <tr className="border-b">
                <th className="py-2 text-sm md:text-xl">Product</th>
                <th className="text-sm md:text-xl">Price</th>
                <th className="text-sm md:text-xl">Quantity</th>
                <th className="text-sm md:text-xl">Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="flex items-center gap-4 py-4">
                    {/*  Product Image and Info */}
                    <img src={item.thumbnail} alt={item.title} className="w-12 h-12 object-cover rounded" />
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.category}</p>
                    </div>
                  </td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    {/*  Quantity Controller */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="w-6 h-6 md:w-8 md:h-8 bg-[#E23C84] text-white rounded hover:bg-[#e23c63] flex items-center justify-center disabled:opacity-50"
                      >
                        -
                      </button>
                      <span className="w-8 text-center font-semibold">
                        {item.quantity.toString().padStart(2, '0')}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="w-6 h-6 md:w-8 md:h-8 bg-[#E23C84] text-white rounded hover:bg-[#e23c63] flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    {/* Remove Item Button */}
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="w-6 h-6 md:w-8 md:h-8 bg-[#E23C84] text-white rounded hover:bg-[#e23c63] flex items-center justify-center"
                    >
                      ✕
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Order Summary Box */}
        <div className="w-full lg:w-80 bg-white border border-gray-300 rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

          <div className="flex justify-between py-2 border-b">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between py-2 border-b">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div className="flex justify-between py-4 font-bold text-lg">
            <span>Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          {/* Link to checkout page */}
          <Link
            to="/Checkout"
            className="block w-full text-center bg-[#E23C84] text-white py-2 rounded hover:bg-[#e23c63] mt-4 transition"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CartItem;
