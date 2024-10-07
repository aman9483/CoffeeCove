import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaShoppingCart } from 'react-icons/fa';
import data from './data.json';

// Remove food image import since it won't be used

const Services = () => {
  const [category, setCategory] = useState('All');
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedCoffee, setSelectedCoffee] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState('');

  // Filter data based on selected category
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
    handleClosePopup(); // Close the popup after submitting
  };

  return (
    <div className="container my-16 space-y-12 px-4">
      {/* Section Title */}
      <div className="text-center max-w-lg mx-auto space-y-4">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 150, damping: 10, delay: 0.4 }}
          className="text-4xl font-bold text-gray-800"
        >
          Fresh and <span className="text-primary">Tasty Coffee & Food</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 150, damping: 10, delay: 0.4 }}
          className="text-md text-gray-600"
        >
          Discover a variety of coffee drinks and food, freshly brewed and full of flavor. Choose your favorite from our selection.
        </motion.p>
      </div>

      {/* Category Buttons */}
      <div className="flex justify-center space-x-4 mb-8">
        <button onClick={() => setCategory('All')} className={`px-4 py-2 rounded ${category === 'All' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}>
          All
        </button>
        <button onClick={() => setCategory('Hot')} className={`px-4 py-2 rounded ${category === 'Hot' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}>
          Hot
        </button>
        <button onClick={() => setCategory('Cold')} className={`px-4 py-2 rounded ${category === 'Cold' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}>
          Cold
        </button>
        <button onClick={() => setCategory('Tumble')} className={`px-4 py-2 rounded ${category === 'Tumble' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}>
          Tumble
        </button>
        <button onClick={() => setCategory('At Home Coffee')} className={`px-4 py-2 rounded ${category === 'At Home Coffee' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}>
          At Home Coffee
        </button>
        <button onClick={() => setCategory('Food')} className={`px-4 py-2 rounded ${category === 'Food' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}>
          Food
        </button>
      </div>

      {/* Coffee & Food Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
        {filteredData.map((item) => (
          <motion.div
            key={item.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 150, damping: 10 }}
          >
            {/* Image Section */}
            <img
              src={item.image} // Assuming your data has an `image` property
              alt={item.name}
              className="w-full h-64 object-contain bg-gray-100 p-4"
            />

            {/* Content Section */}
            <div className="p-6 space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">{item.name}</h2>
              <p className="text-md text-gray-600">{item.description}</p>
              <p className="text-lg font-semibold text-primary">₹{item.price}</p>

              {/* Order Now Option */}
              <button 
                onClick={() => handleOrderNow(item)} 
                className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white font-medium rounded-lg shadow hover:bg-primary-dark transition duration-300"
              >
                <FaShoppingCart className="text-lg" /> Order Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Popup for size and quantity selection */}
      {isPopupOpen && selectedCoffee && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">Select Size and Quantity</h2>
            <div className="mb-4">
              <label className="block text-md font-medium mb-2">Size:</label>
              <select 
                value={selectedSize} 
                onChange={(e) => setSelectedSize(e.target.value)} 
                className="w-full border rounded p-2"
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
                className="w-full border rounded p-2"
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
