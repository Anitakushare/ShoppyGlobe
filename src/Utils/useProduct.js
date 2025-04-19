import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { setProducts } from "./productSlice";
// Custom hook for fetching products and dispatching them to Redux
const useProduct= () => {
  const [products,setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch=useDispatch();

  useEffect(()=>{
    const fetchData = async ()=>{
        try{
        const result=await fetch("https://dummyjson.com/products");
        const data=await result.json();
        const shoppingData=data?.products || [];
        setProductsData(shoppingData);// Save data to local state
        dispatch(setProducts(shoppingData));// Dispatch data to Redux store
        //console.log(shoppingData);
      }catch(err){
        setError(err);
      }finally{
        setLoading(false);
      }
    }
    fetchData();
  },[dispatch]); // Dependency array

return {products,error,loading}
}
export default useProduct;