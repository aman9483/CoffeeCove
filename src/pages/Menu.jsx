import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaShoppingCart } from 'react-icons/fa';
import data from '../components/services/data';

const Services = () => {
  const [category, setCategory] = useState('All');
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedCoffee, setSelectedCoffee] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState('');

  const filteredData = category === 'All' ? data : data.filter(item => item.category === category);

  const handleOrderNow = (item) => {
    setSelectedCoffee(item);
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    setSelectedCoffee(null);
    setSelectedSize('');
    setSelectedQuantity('');
  };

  const handleSubmitOrder = () => {
    console.log(`Ordered: ${selectedCoffee.name}, Size: ${selectedSize}, Quantity: ${selectedQuantity}`);
    handleClosePopup();
  };

  return (
    <div className="container mx-auto my-16 space-y-12 px-4">
      {/* Section Title */}
      <div className="text-center max-w-lg mx-auto space-y-4 mt-28">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 150, damping: 10, delay: 0.4 }}
          className="text-5xl font-extrabold text-gray-900 tracking-wider"
        >
         
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 150, damping: 10, delay: 0.4 }}
          className="text-lg text-gray-700"
        >
         
        </motion.p>
      </div>

      {/* Category Buttons */}
      <div className="flex justify-center space-x-4 mb-8">
        {['All', 'Hot', 'Cold', 'Tumble', 'At Home Coffee', 'Food'].map((cat) => (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 font-medium rounded-full transition-all duration-300 ${
              category === cat ? 'bg-primary text-white shadow-lg' : 'bg-gray-100 text-gray-700 border border-gray-300'
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Coffee & Food Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
        {filteredData.map((item) => (
          <motion.div
            key={item.id}
            className="bg-white border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 150, damping: 10 }}
          >
            {/* Image Section */}
            <div className="h-64 bg-gray-100 flex items-center justify-center p-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-contain transition duration-300 hover:scale-105"
              />
            </div>

            {/* Content Section */}
            <div className="p-6 space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">{item.name}</h2>
              <p className="text-md text-gray-600">{item.description}</p>
              <p className="text-lg font-semibold text-primary">₹{item.price}</p>

              {/* Order Now Option */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleOrderNow(item)}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white font-medium rounded-lg shadow hover:bg-primary-dark transition duration-300"
              >
                <FaShoppingCart className="text-lg" /> Order Now
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Popup for size and quantity selection */}
      {isPopupOpen && selectedCoffee && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="bg-white p-8 rounded-lg shadow-xl max-w-sm w-full space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-800">Select Size and Quantity</h2>
            <div className="mb-4">
              <label className="block text-md font-medium mb-2">Size:</label>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full border border-gray-300 rounded p-2 transition focus:ring-2 focus:ring-primary"
              >
                <option value="">Select Size</option>
                {selectedCoffee.quantity.map((size, index) => (
                  <option key={index} value={size}>{size}</option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-md font-medium mb-2">Quantity:</label>
              <input
                type="number"
                value={selectedQuantity}
                onChange={(e) => setSelectedQuantity(e.target.value)}
                className="w-full border border-gray-300 rounded p-2 transition focus:ring-2 focus:ring-primary"
                min="1"
              />
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={handleClosePopup}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition duration-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitOrder}
                className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition duration-300"
              >
                Submit Order
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Services;
