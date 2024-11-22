import React from 'react';
import { motion } from 'framer-motion';
import worldMap from "../../assets/world-map.png";

const wheretobuy = () => {
  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const inputVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className='container my-36'>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center'>
        <div className='space-y-8'>
          {/* Title with Animation */}
          <motion.h1
            className='text-4xl font-bold text-darkGray font-serif'
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Buy Our Coffee from Anywhere
          </motion.h1>

          <div className='flex items-center gap-4'>
            {/* Name and Email Inputs with Animation */}
            <motion.input
              type='text'
              placeholder='Name'
              className='input-style w-full lg:w-[150px]'
              variants={inputVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.4, delay: 0.4 }}
            />
            <motion.input
              type='email'
              placeholder='Email'
              className='input-style w-full'
              variants={inputVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.4, delay: 0.5 }}
            />
          </div>
          <div className='flex items-center gap-4'>
            {/* Country and ZipCode Inputs with Animation */}
            <motion.input
              type='text'
              placeholder='Country'
              className='input-style w-full lg:w-[150px]'
              variants={inputVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.4, delay: 0.6 }}
            />
            <motion.input
              type='text'
              placeholder='ZipCode'
              className='input-style w-full'
              variants={inputVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.4, delay: 0.7 }}
            />
          </div>

          {/* Order Now Button with Enhanced Style and Animation */}
          <motion.button
            className='primary-btn w-full lg:w-[200px] px-6 py-3 text-lg font-semibold rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-primary-dark transform hover:scale-105'
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.4, delay: 0.8 }}
          >
            Order Now
          </motion.button>
        </div>

        <div className='col-span-2'>
          {/* World Map Image with Animation */}
          <motion.img
            src={worldMap}
            alt='World Map'
            className='w-full sm:w-[500px] mx-auto'
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 1 }}
          />
        </div>
      </div>
    </div>
  );
}

export default wheretobuy;
