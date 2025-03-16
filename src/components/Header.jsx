import { FiSearch, FiUser, FiHeart, FiShoppingBag } from 'react-icons/fi';
import * as assets from '../assets';


function Header({ onNavigate, activePage }) {
  return (
    <header className="bg-white shadow-md h-26">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between h-full">
        {/* Logo */}
        <div>
            <img 
            src={assets.lillian} alt="Logo" className="h-12 cursor-pointer"
            onClick={() => onNavigate('home')}
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['Home', 'Category', 'Collections', 'Shop', 'Offers', 'Gift Store'].map((item) => (
            <button
              key={item}
              onClick={() => onNavigate(item.toLowerCase())}
              className={`text-gray-700 hover:text-blue-500 font-medium ${
                activePage === item.toLowerCase() ? 'border-b-2 border-blue-500' : ''
              }`}
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-8">
          <FiSearch className="w-5 h-5 cursor-pointer text-gray-600 hover:text-blue-500" />
          <FiUser className="w-5 h-5 cursor-pointer text-gray-600 hover:text-blue-500" />
          <FiHeart className="w-5 h-5 cursor-pointer text-gray-600 hover:text-blue-500" />
          <FiShoppingBag className="w-5 h-5 cursor-pointer text-gray-600 hover:text-blue-500" />
        </div>
      </div>
    </header>
  );
}

export default Header;
