import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu, GiCoffeeBeans } from "react-icons/gi";
import { FaShoppingCart, FaCoffee, FaUserPlus } from "react-icons/fa";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = ({ sidebar, setSidebar }) => {
  const [isDarkText, setIsDarkText] = useState(false);

  useEffect(() => {
    // Customize this logic as needed, here based on scroll position for demonstration
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsDarkText(scrollPosition > 100); // Change based on desired condition
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.4 }}
      className='absolute top-0 left-0 w-full pt-10 z-40' // Keep background style unchanged
    >
      <div className='container'>
        <div className='flex justify-between items-center'>
          {/* Shop Name with Coffee Bean Icon */}
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.4 }}
            className={`text-2xl font-semibold uppercase flex items-center ${isDarkText ? 'text-black' : 'text-white'}`}
          >
            <Link to='/' className='flex'>
            <GiCoffeeBeans className={`mr-2 text-4xl ${isDarkText ? 'text-black' : 'text-yellow-500'}`} />
            <span className={`${isDarkText ? 'text-black' : 'text-yellow-500'}`}>CoffeeCove</span>

            </Link>
          </motion.h1>

          {/* Icon Section */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.4 }}
            className='flex items-center space-x-4'
          >
            {/* Coffee Cup Icon */}
            <div className="relative group">

              <Link to='coffee'>
              <FaCoffee className={`text-3xl cursor-pointer ${isDarkText ? 'text-black' : 'text-blue-700'}`} />
              <span className={`absolute left-1/2 transform -translate-x-1/2 bottom-full mb-1 w-auto p-1 ${isDarkText ? 'bg-white text-black' : 'bg-black text-white'} text-xs rounded hidden group-hover:block`}>
                Coffee
              </span>

              </Link>
            </div>

            {/* Cart Icon with Badge */}
            <div className="relative group">

            <Link to='cart'>
              <FaShoppingCart className={`text-3xl cursor-pointer ${isDarkText ? 'text-black' : 'text-blue-700'}`} />
              <span className='absolute -top-2 -right-2 bg-red-500 text-xs w-5 h-5 flex justify-center items-center rounded-full'>
                0
              </span>
              </Link>
        
              <span className={`absolute left-1/2 transform -translate-x-1/2 bottom-full mb-1 w-auto p-1 ${isDarkText ? 'bg-white text-black text-blue-700' : 'bg-black text-white'} text-xs rounded hidden group-hover:block`}>
                Cart
              </span>

              
            </div>

            {/* Signup Icon */}
            <div className="relative group">
              <Link to='sign-in'>
                <FaUserPlus className={`text-3xl cursor-pointer ${isDarkText ? 'text-black' : 'text-blue-700'}`} />
                <span className={`absolute left-1/2 transform -translate-x-1/2 bottom-full mb-1 w-auto p-1 ${isDarkText ? 'bg-white text-black' : 'bg-black text-white'} text-xs rounded hidden group-hover:block`}>
                  Signup
                </span>
              </Link>
            </div>

            {/* Hamburger Icon */}
            <div className="relative group">
              <GiHamburgerMenu
                onClick={() => setSidebar(!sidebar)}
                className={`text-3xl cursor-pointer ${isDarkText ? 'text-black' : 'text-blue-700'}`}
              />
              <span className={`absolute left-1/2 transform -translate-x-1/2 bottom-full mb-1 w-auto p-1 ${isDarkText ? 'bg-white text-black' : 'bg-black text-white'} text-xs rounded hidden group-hover:block`}>
                Menu
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
