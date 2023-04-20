import React from 'react';
import { motion } from "framer-motion";

const Button = ({ changePhrase, changeBackgroundImage }) => {
  return (
    <motion.button onClick={() => {
        changePhrase();
        changeBackgroundImage();
      }} 
      className='flex items-center justify-center bg-white bg-opacity-25 rounded-xl shadow-xl shadow-red-600 border-2 border-red-500 md:text-3xl font-bold md:mt-8 hover:bg-black hover:scale-125 h-10 w-28 2xl:w-60 2xl:h-20 2xl:rounded-3xl hover:text-red-500 box-content bg-transparent'
      whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}>
     <span className='text-white font-black 2xl:text-4xl hover:text-red-500 text-center xl:text-xl md:text-lg p-4'>NEXT</span>
    </motion.button>
  )
}

export default Button