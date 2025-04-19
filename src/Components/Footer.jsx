import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
const Footer = () => {
    return (
      <footer className="bg-[#0B1C2C] text-gray-300 pt-10 pb-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About section */}
          <div>
            <h2 className="text-white text-lg font-bold mb-3">About ShoppyGlobe</h2>
            <p className="text-sm">
            Welcome to ShoppyGlobe — your one-stop destination for a world of shopping at your fingertips!

At ShoppyGlobe, we believe shopping should be exciting, effortless, and accessible to everyone. Whether you're refreshing your home, upgrading your beauty essentials, finding your signature fragrance, or stocking up on groceries — we've got you covered with handpicked collections at unbeatable prices.
            </p>
          </div>
         {/*  Categories section  */}
          <div>
            <h2 className="text-white text-lg font-bold mb-3">Categories</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-pink-400">Beauty</a></li>
              <li><a href="#" className="hover:text-pink-400">Fragrances</a></li>
              <li><a href="#" className="hover:text-pink-400">Groceries</a></li>
              <li><a href="#" className="hover:text-pink-400">Furniture</a></li>
            </ul>
          </div>
      {/* Support section */}
          <div>
            <h2 className="text-white text-lg font-bold mb-3">Support</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-pink-400">FAQs</a></li>
              <li><a href="#" className="hover:text-pink-400">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-pink-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-pink-400">Contact Us</a></li>
            </ul>
          </div>
    {/* Social media icons for brand */}
          <div>
            <h2 className="text-white text-lg font-bold mb-3">Connect With Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-pink-400"><FaFacebookF/></a>
              <a href="#" className="hover:text-pink-400"><FaInstagram/></a>
              <a href="#" className="hover:text-pink-400"><FaGithub/></a>
              <a href="#" className="hover:text-pink-400">< FaLinkedinIn/></a>
            </div>
          </div>
        </div>
    {/*copyright text */}
        <div className="mt-8 border-t border-gray-600 pt-4 text-center text-sm">
          <p>&copy; 2025 ShoppyGlobe. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  