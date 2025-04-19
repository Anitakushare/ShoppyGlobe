import useProduct from '../Utils/useProduct';
import ProductItem from './ProductItem';
import HeroSlider from './HeroSlider';
import { useParams } from 'react-router-dom';

const ProductList = () => {
    // Fetch products and errors using the custom hook
  const { products,loading, error } = useProduct();
  const { category } = useParams();// Get category parameter from the URL
// Filter products based on the category
  const filteredProducts = category 
    ? products.filter(product => product.category.toLowerCase() === category.toLowerCase())
    : products;
 
    if(loading){
      return <p className='text-xl  text-center'>Loading....</p>
    }
  if (error) {
    return <p className='text-xl text-red-500 text-center'>Error Fetching Products!!</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E0F7FA] to-[#FFFFFF]">
     
      {!category && <HeroSlider />}
      <h2 className="text-lg mt-4 mb-4 font-semibold text-center text-teal-600 sm:text-xl md:text-2xl lg:text-3xl">
        {category ? `${category} Products` : ' Discover Your New Favorite'}
      </h2>
{/* Display products section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
         {/* If no products match it show error */}
        {filteredProducts.length === 0 ? (
          <p className="text-center text-lg text-gray-500 col-span-full">
            No products found for "{category}"
          </p>
        ) : (
          // Otherwise, map through filtered products and display them
          filteredProducts.map((data) => (
            <ProductItem key={data.id} shopData={data} />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;
