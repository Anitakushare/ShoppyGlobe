import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addProduct} from "../Utils/productSlice";
import { useState } from 'react';

const ProductItem = ({shopData}) => {
  const {id,title,thumbnail,price,rating,category}=shopData; //Destructure shopData
    const dispatch=useDispatch();
    //state variable to handle state
   const [showToast, setShowToast] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

 // Function to handle adding a product to the cart
    function handleAddtoCart(product) {
       
          dispatch(addProduct(product));
          setSuccessMessage(` Product added to cart!`);
          setShowToast(true);
          
        }
  
  return (
    <div className="flex flex-col border border-zinc-200 bg-white rounded-2xl shadow-lg hover:shadow-2xl p-3 hover:scale-105 transition-transform duration-300 cursor-pointer">
      {/* Show the individual product cart*/}
  <img 
    className="w-full h-36 object-contain rounded-xl mb-2" 
    src={thumbnail} 
    alt={title}
    onError={(e) => { e.target.src = '/fallback-image.png'; }}
  />

  <div className="flex-grow flex flex-col justify-between gap-2">
    <div>
      <h1 className="text-lg font-semibold text-[#212121] md:mb-1 truncate">{title}</h1>
      <h2 className="text-xs text-gray-500 capitalize">{category}</h2>
    </div>

    <div className="md:mt-2">
      <h2 className="text-lg font-bold text-black">${price}</h2>
      <h3 className="text-sm text-yellow-600">⭐ {rating}</h3>
    </div>
  </div>
   {/* Link to view product details */}
  <div className="flex flex-col md:flex-row gap-2 md:mt-3 w-full">
    <Link to={`/ProductItem/${id}`} className="flex-1 text-center border border-gray-400 rounded-lg py-1 text-sm hover:text-white hover:bg-[#D81B60] text-black">
      View Details
    </Link>
       {/* button to add product to cart */}
    <button onClick={()=>handleAddtoCart(shopData)} className="flex-1 bg-[#38B2AC] hover:bg-[#319795] text-white rounded-lg py-1 text-sm">
      Add to Cart
    </button>
  </div>
</div>

  )
}

export default ProductItem
