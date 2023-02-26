import React from 'react'
import Phrases from '../assets/phrases.json'


const Card = ({ Phrases }) => {
  return (
    <section className='md:w-2/6 md:h-3/6 border-4 border-red-500 flex flex-col items-center mt-14 rounded-2xl justify-around shadow-lg shadow-red-500'>
      <div className= 'md:w-4/3 md:h-auto flex items-center justify-center md:px-3 md:py-1'>
      <p className='text-white md:text-2xl font-semibold'>{Phrases.quote}</p>
      </div>
      <div className= ''>
        <h2 className='md:text-4xl font-bold text-red-500'>{Phrases.author}</h2>
      </div>
    </section>
  )
}

export default Card