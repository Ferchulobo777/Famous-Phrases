import React from 'react'

const Button = ({ handleClick, backgroundImage }) => {
  return (
    <button onClick={handleClick} className='flex items-center justify-center bg-white bg-opacity-25 rounded-xl shadow-xl shadow-red-600 border-2 border-red-500 md:text-3xl font-bold md:mt-8 hover:bg-black hover:scale-125 h-10 w-28 2xl:w-60 2xl:h-20 2xl:rounded-3xl hover:text-red-500 box-content' style={{ backgroundImage: `url(${backgroundImage})` }}>
     <span className='text-white font-bold 2xl:text-4xl hover:text-red-500 text-center xl:text-xl md:text-lg'>NEXT →</span>
    </button>
  )
}

export default Button