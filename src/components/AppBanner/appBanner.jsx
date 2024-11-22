import React from 'react';
import Cover from "../../assets/website/coffee-cover.jpg";
import App from "../../assets/website/app_store.png";
import Play from "../../assets/website/play_store.png";
import { motion } from 'framer-motion';

const bgImage = {
  backgroundImage: `url(${Cover})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: '500px', // Increased height for better visual appeal
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  position: 'relative', // Allow absolute positioning of the overlay
  color: 'white', // Change text color to white for contrast
};

const AppBanner = () => {
  return (
    <motion.div 
      style={bgImage}
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      {/* Overlay for better visibility */}
      <motion.div 
        className="overlay"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 0.8 }} 
        transition={{ duration: 0.5 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for contrast
        }}
      />
      
      <motion.h1 
        initial={{ y: -50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl font-bold"
      >
        Download Our Coffee App Now!
      </motion.h1>

      <motion.div 
        className="flex space-x-4 mt-4"
        initial={{ y: 50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <a href="#" className="flex items-center">
          <img src={App} alt="App Store" className="w-40" /> {/* Increased size */}
        </a>
        <a href="#" className="flex items-center">
          <img src={Play} alt="Play Store" className="w-40" /> {/* Increased size */}
        </a>
      </motion.div>
    </motion.div>
  );
};

export default AppBanner;
