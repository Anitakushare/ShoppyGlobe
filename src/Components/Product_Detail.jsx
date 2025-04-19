import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addProduct} from "../Utils/productSlice";
import SuccessMsg from './SuccessMsg';



const Product_Detail = () => {
  const {id}=useParams() // Get product ID
  const [products,setProducts]=useState(null);// Store product details
 const [loading,setLoading]=useState(true);// Track loading state
  const [showToast, setShowToast] = useState(false);
  const [successMessage, setSuccessMessage] = useState(""); //success message

//dispatch action
  const dispatch=useDispatch();

   // Fetch product details by ID
  useEffect(()=>{
    const fetchId=async ()=>{
      try{
        const result=await fetch(`https://dummyjson.com/products/${id}`);
        const resultData=await result.json();
      //console.log(resultData)
      if (resultData.message) {
        setProducts(null); 
      } else {
        setProducts(resultData);  
      }
      }catch(err){
        setError(err);
      }
       finally{
         setLoading(false);
      }
     
    }
    fetchId();
  },[id]);
// HandleAddtoCart Function to adding product to cart
  function handleAddtoCart(product) {
   
      dispatch(addProduct(product));
      setSuccessMessage(`${product.title} added to cart!`);
      setShowToast(true);
      
    }
// Show loading message while data is being fetched
    if (loading) return <p className="text-center text-xl font-semibold">Loading...</p>;
    if (!products) {
      return (
        <div className="text-center mt-25 mb-40">
            {/*Show error when product not found*/}
          <h1 className="text-2xl font-bold text-[#E23C84] mb-4">Oops!.Product with id {id} not found</h1>
          <Link
            to="/"
            className="inline-block bg-gray-200 px-4 py-2 rounded-full hover:bg-[#E23C84] hover:text-white transition"
          >
            ← Back to Home
          </Link>        
        </div>
      );
    }
  return (
    <div className=" flex items-center justify-center bg-gradient-to-br from-[#E0F7FA] to-[#FFFFFF] px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10">
  
    <div className="w-full max-w-4xl bg-white text-black rounded-3xl shadow-2xl p-8 space-y-2">
      <Link
        to="/"
        className="inline-block bg-gray-200 px-4 py-2 rounded-full hover:bg-[#E23C84] hover:text-white transition"
      >
        ← Back
      </Link>

      <div className="flex flex-col md:flex-row gap-4 items-center">
        <img
          src={products?.thumbnail}
          alt={products?.title}
          className="w-full md:w-1/2 h-72 object-contain rounded-lg shadow"
        />

        <div className="flex-1 space-y-2">
          <h1 className="text-3xl font-bold text-gray-800">{products?.title}</h1>
          <div className="flex items-center gap-2 text-yellow-500 text-lg font-semibold">
            ⭐ {products?.rating}
          </div>
          <p className="text-2xl font-semibold text-black">₹{products?.price}</p>
          <p className="text-green-600 font-bold text-lg">↓ {products?.discountPercentage}% off</p>
          <p className="text-gray-700">{products?.description}</p>

          <button
            onClick={() => handleAddtoCart(products)}
            className="mt-4 bg-[#4d979e] text-white px-6 py-2 rounded-full shadow hover:bg-[#64bdb9] hover:scale-105 transition-transform"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
      {showToast && (
  <SuccessMsg message={successMessage} onClose={() => setShowToast(false)} />
)}
    </div>
  );
  
  
}

export default Product_Detail
