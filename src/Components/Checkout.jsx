import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProduct, clearCart } from '../Utils/productSlice';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { selectCartItems } from '../Utils/Selector';

const Checkout = () => {
  const dispatch = useDispatch();

  //Get items from Redux store cart state
  const checkOutItems = useSelector(selectCartItems) || [];

  // Calculate the subtotal of all cart items
  const subtotal = checkOutItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  //  State to handle order confirmation message
  const [confirmed, setConfirmed] = useState(false);

  // Remove a product from the checkout list
  const handleRemove = (id) => {
    dispatch(removeProduct(id));
  };

  //  Place order- show confirmation & clear the cart
  const handlePlaceOrder = () => {
    setConfirmed(true);
    dispatch(clearCart());
  };

  return (
    <div className="p-8 mt-4 flex items-center justify-center bg-gradient-to-br from-[#E0F7FA] to-[#FFFFFF]">

      {/*  If order is confirmed, show success message */}
      {confirmed ? (
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold text-green-600 mb-4">✅ Order Confirmed!</h1>
          <p className="text-xl text-gray-600">Thank you for shopping with us!</p>
          <p className="text-xl text-gray-600">Your order has been placed successfully.</p>
          <Link to="/" className="w-1/2 mt-6 text-white py-2 text-center text-lg rounded bg-[#e23c63] hover:bg-[#E23C84]">
            Continue Shopping
          </Link>
        </div>
      ) : (
     
        <div className="w-full max-w-2xl border border-gray-400 rounded-lg p-6 shadow-xl">
          
          {/*  If cart is empty, show Error message */}
          {checkOutItems.length === 0 ? (
            <div className="text-center flex flex-col text-gray-500 text-2xl py-10">
              🛒 Your Cart is Empty!
              <Link to="/" className="mt-4 text-[#E23C84] hover:underline">Back to Home</Link>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-4">Checkout</h2>

              {/*  List each product in the cart with price and quantity */}
              {checkOutItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center border-b py-2">
                  <span className='  text-[#212121] md:mb-1 truncate'>{item.title}</span>
                  <span>${(item.price * item.quantity).toFixed(2)} × {item.quantity}</span>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ))}

              {/* Display total price */}
              <div className="flex justify-between font-bold text-lg mt-4">
                <span>Total:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              {/* Button to confirm and place the order */}
              <button
                onClick={handlePlaceOrder}
                className="w-full mt-6 bg-[#E23C84] hover:bg-[#e23c63] text-white py-2 rounded"
              >
                Place Your Order
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Checkout;
