import { Menu, X } from 'lucide-react';
import Cart from "./Cart"; 
import HandleSearch from './HandleSearch';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  //state variable it rerender when state change 
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex flex-col bg-[#64B6BD] text-gray-900 shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center p-2">
        
       
        <div className="flex text-2xl font-bold text-gray-900 italic shine-text">
          ShoppyGlobe 
        </div>

        {/* Search and cart*/}
        <div className="flex items-center space-x-4">
         <HandleSearch />
          <Cart />
          {/* Mobile menu button */}
          <div className="md:hidden">
            {isOpen ? (
              <X className="w-6 h-6 cursor-pointer" onClick={() => setIsOpen(false)} />
            ) : (
              <Menu className="w-6 h-6 cursor-pointer" onClick={() => setIsOpen(true)} />
            )}
          </div>
        </div>
      </div>

      {/* Navigation Links for Desktop */}
      <ul className="hidden md:flex justify-center bg-[#9ad0d5] space-x-8 py-2 text-lg font-semibold">
        <Link to='/'><li className="hover:text-gray-700 hover:underline">Home</li></Link>  
        <Link to='/ProductList/Beauty'><li className="hover:text-gray-700 hover:underline">Beauty</li></Link>
        <Link to='/ProductList/Fragrances'><li className="hover:text-gray-700 hover:underline">Fragrances</li></Link> 
        <Link to='/ProductList/Furniture'><li className="hover:text-gray-700 hover:underline">Furniture</li></Link> 
        <Link to='/ProductList/Groceries'><li className="hover:text-gray-700 hover:underline">Groceries</li></Link>
      </ul>

      {/* Mobile Dropdown Navigation */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 py-4 bg-[#9ad0d5]">
          <Link to='/'><li className="hover:text-gray-700 hover:underline">Home</li></Link>  
          <Link to='/ProductList/Beauty'><li className="hover:text-gray-700 hover:underline">Beauty</li></Link>
          <Link to='/ProductList/Fragrances'><li className="hover:text-gray-700 hover:underline">Fragrances</li></Link> 
          <Link to='/ProductList/Furniture'><li className="hover:text-gray-700 hover:underline">Furniture</li></Link> 
          <Link to='/ProductList/Groceries'><li className="hover:text-gray-700 hover:underline">Groceries</li></Link>
        </ul>
      )}
    </nav>
  );
};

export default Header;
