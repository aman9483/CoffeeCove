import React, { useState } from 'react';
import BgImage from "../../assets/bg-slate.png";
import coffeeMain from "../../assets/black.png";
import Navbar from '../Navbar/Navbar';
import { motion } from "framer-motion";
import { GiCoffeeCup, GiCoffeeBeans } from "react-icons/gi";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Hero = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <main style={bgImage}>
      <section className='relative min-h-[750px] w-full'>
        <div className="container mx-auto px-4 md:px-8">

          <Navbar sidebar={sidebar} setSidebar={setSidebar} />

          {/* Hero section */}
          <div className='grid grid-cols-1 md:grid-cols-3 place-items-center min-h-[850px] gap-4'>

           
            <div className='flex flex-col items-center justify-center bg-gray-800 rounded-lg shadow-lg p-6 mt-24 md:mt-20'>
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.5 }}
                className='text-center text-white'
              >
                <h1 className='text-2xl md:text-3xl font-bold'>Crafted with Passion</h1>
                <p className='text-sm md:text-base leading-loose'>
                  Discover the art of coffee-making with our expertly crafted blends.
                </p>
              </motion.div>

              <div className='flex justify-around w-full mt-6'>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.7 }}
                  className='text-primary text-3xl'
                >
                  <GiCoffeeCup />
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.9 }}
                  className='text-primary text-3xl'
                >
                  <GiCoffeeBeans />
                </motion.div>
              
              </div>
            </div>

            {/* Coffee Image Section */}
            <div className='relative'>
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.4 }}
                src={coffeeMain}
                alt='Coffee Main'
                className='relative z-40 h-[400px] md:h-[500px] lg:h-[700px] img-shadow'
              />
              <motion.div
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.8 }}
                className='h-[120px] w-[120px] md:h-[140px] md:w-[140px] absolute top-4 -right-8 md:-right-16 border-primary border-[8px] md:border-[12px] rounded-full z-10 flex justify-center items-center bg-gray-700'
              >
                <GiCoffeeCup className='w-8 h-8 text-primary' />
              </motion.div>

              <div className='absolute -top-16 left-[50%] transform -translate-x-[50%] z-[1]'>
                <h1 className='text-[60px] md:text-[80px] scale-150 font-bold text-darkGray/40 leading-none'>
                  Café Noir
                </h1>
              </div>
            </div>

            <div className='flex flex-col items-center justify-center bg-gray-800 rounded-lg shadow-lg p-6 mt-[-40]'>
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.5 }}
                className='text-center text-white'
              >
                <h1 className='text-2xl md:text-3xl font-bold'>Experience Serenity</h1>
                <p className='text-sm md:text-base leading-loose'>
                  Unwind in a cozy atmosphere with our unique selection of brews and pastries.
                </p>
              </motion.div>

           
              <div className='flex justify-around w-full mt-6'>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.7 }}
                  className='text-primary text-3xl'
                >
                  <GiCoffeeCup />
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.9 }}
                  className='text-primary text-3xl'
                >
                  <GiCoffeeBeans />
                </motion.div>
               
              </div>
            </div>

          </div>
        </div>

      
        {sidebar && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            className='absolute top-0 right-0 w-[240px] md:w-[300px] h-full bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop-blur-sm z-10'
          >
            <div className='w-full h-full flex flex-col justify-between items-center py-10'>

            
              <div className='w-[1px] h-[70px] bg-white'></div>

           
              <div className='flex flex-col justify-center items-center gap-6 text-white'>
            
                <div className='inline-block p-2 rounded-full cursor-pointer border border-white'>
                  <GiCoffeeCup className='text-2xl' />
                </div>

                <div className='inline-block p-2 rounded-full cursor-pointer border border-white'>
                  <GiCoffeeBeans className='text-2xl' />
                </div>
              </div>

              <div className='w-[1px] h-[70px] bg-white'></div>
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
}

export default Hero;
