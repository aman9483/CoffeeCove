import React from 'react';
import { motion } from 'framer-motion';
import cardsImage from '../../assets/website/credit.webp'; // Update the path to your image
import App from "../../assets/website/app_store.png";
import Play from "../../assets/website/play_store.png";

const Footer = () => {
  return (
    <footer className="bg-orange-600 text-white py-10">
      <div className="container mx-auto flex flex-col items-center">
        {/* Brand Info */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold">Coffee Cove</h2>
          <p className="mt-2 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea ratione quidem libero, praesentium ab atque? Quidem maxime, numquam dolores.
          </p>
          <p className="mt-2">+1 (123) 456-7890</p>
          <p className="mt-2">Patna, Bihar, India</p>
        </div>

        {/* Image Section */}
        <motion.div
          className="mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={cardsImage} alt="Payment Methods" className="w-full max-w-[400px] rounded-lg shadow-lg" />
        </motion.div>

        <div className='flex'>

        <a href="#" className="flex items-center">
          <img src={App} alt="App Store" className="w-40" /> {/* Increased size */}
        </a>
        <a href="#" className="flex items-center">
          <img src={Play} alt="Play Store" className="w-40" /> {/* Increased size */}
        </a>

        </div>

        {/* Footer Menu */}
        <div className="flex flex-wrap justify-center space-x-8 mb-4">
          <motion.a 
            href="#home" 
            className="text-gray-300 hover:text-white" 
            whileHover={{ scale: 1.05 }} 
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Home
          </motion.a>
          <motion.a 
            href="#about" 
            className="text-gray-300 hover:text-white" 
            whileHover={{ scale: 1.05 }} 
            transition={{ type: 'spring', stiffness: 300 }}
          >
            About
          </motion.a>
          <motion.a 
            href="#services" 
            className="text-gray-300 hover:text-white" 
            whileHover={{ scale: 1.05 }} 
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Services
          </motion.a>
          <motion.a 
            href="#contact" 
            className="text-gray-300 hover:text-white" 
            whileHover={{ scale: 1.05 }} 
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Contact Us
          </motion.a>
          <motion.a 
            href="#privacy" 
            className="text-gray-300 hover:text-white" 
            whileHover={{ scale: 1.05 }} 
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Privacy Policy
          </motion.a>
        </div>

       

        {/* Copyright Statement */}
        <motion.p 
          className="text-center text-sm text-gray-400" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          © {new Date().getFullYear()} Developed by Aman Verma. All Rights Reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
