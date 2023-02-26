import React from 'react'

const Button = ({ handleClick }) => {
  return (
    <button onClick={handleClick} className='bg-black min-w-320 max-w-2xl w-60 h-20 border-2 border-red-500 rounded-3xl text-3xl font-bold mt-8 shadow-lg shadow-red-500 hover:bg-gray-600 hover:transform'>
     <span className='text-white'>Siguiente</span>
     <span className='text-white'> →</span>
    </button>
  )
}

export default Button