import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaShoppingCart } from 'react-icons/fa';
import data from './data';

const Services = () => {
  const [category, setCategory] = useState('All');
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedCoffee, setSelectedCoffee] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState('');
  const [isOrderFormOpen, setOrderFormOpen] = useState(false);
  const [customerName, setCustomerName] = useState('');

  const [customerAddress, setCustomerAddress] = useState('');
  const [isOrderSuccess, setOrderSuccess] = useState(false);

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
    if (selectedSize && selectedQuantity) {
      setPopupOpen(false);
      setOrderFormOpen(true);
    } else {
      alert('Please select a size and quantity.');
    }
  };


  const handleConfirmOrder = () => {
    if (customerName && customerAddress) {
      setOrderFormOpen(false);
      setOrderSuccess(true);
    } else {
      alert('Please enter your name and address.');
    }
  };

  const handleSuccessClose = () => {
    setOrderSuccess(false);
    setCustomerName('');
    setCustomerAddress('');
    setSelectedSize('');
    setSelectedQuantity('');
  };

  return (
    <div className="container my-16 space-y-12 px-4">
     
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
        {/* Category buttons (same as before) */}
      </div>

      {/* Products List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
        {filteredData.map((item) => (
          <motion.div
            key={item.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 150, damping: 10 }}
          >
            <img
              src={item.image} 
              alt={item.name}
              className="w-full h-64 object-contain bg-gray-100 p-4"
            />
            <div className="p-6 space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">{item.name}</h2>
              <p className="text-md text-gray-600">{item.description}</p>
              <p className="text-lg font-semibold text-primary">₹{item.price}</p>
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

      {isOrderFormOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">Enter Your Details</h2>
            <div className="mb-4">
              <label className="block text-md font-medium mb-2">Name:</label>
              <input 
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full border rounded p-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-md font-medium mb-2">Address:</label>
              <textarea
                value={customerAddress}
                onChange={(e) => setCustomerAddress(e.target.value)}
                className="w-full border rounded p-2"
              />
            </div>

          
            <div className="flex justify-between mt-4">
              <button 
                onClick={() => setOrderFormOpen(false)} 
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition duration-300"
              >
                Cancel
              </button>
              <button 
                onClick={handleConfirmOrder} 
                className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition duration-300"
              >
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Message */}
      {isOrderSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
            <h2 className="text-2xl font-bold text-primary mb-4">Order Successful!</h2>
            <p className="text-md text-gray-600 mb-4">
              Thank you, {customerName}! Your order of {selectedQuantity} {selectedSize} {selectedCoffee.name} has been placed successfully.
            </p>
            <p className="text-md text-gray-600 mb-4">We will deliver to: {customerAddress} Shortly</p>
            <button 
              onClick={handleSuccessClose} 
              className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
