import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import ProductItem from './ProductItem';
import { searchProduct } from '../Utils/productSlice';
import { Link } from 'react-router-dom';
import { selectFilteredProducts } from '../Utils/Selector';

const SearchPage = () => {
  const dispatch = useDispatch();// Dispatch action to update the Redux state
  const location = useLocation();//To access current Url
  // Access filtered products
  const filteredProducts = useSelector(selectFilteredProducts);

  // Extract query string from URL
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q') || '';

  // Dispatch searchProduct when URL query changes
  useEffect(() => {
    if (query.trim() !== '') {
      dispatch(searchProduct(query.trim()));
    }
  }, [query, dispatch]);

  return (
    <div className="bg-gradient-to-r from-[#E0F7FA] to-[#FFFFFF] lg:mt-10 p-4">
      {/** Display search product*/}
      <h1 className="text-3xl text-center text-[#E23C84] font-semibold">
        {filteredProducts.length > 0
          ? `Search Results for "${query}"`
          : "Products Not found."}
      </h1>
{/* If products were found, display them */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {filteredProducts.map(product => (
            <ProductItem key={product.id} shopData={product} />
          ))}
        </div>
      ) : (// If no products found, display error message 
        <div>
        <p className="text-center text-xl text-gray-600 mt-10">
           For matching {query}.
        </p>
         <Link to="/" className="mt-4 text-[#E23C84] hover:underline">Back to Home</Link>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
