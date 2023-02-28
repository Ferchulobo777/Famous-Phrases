import React from 'react';

const Card = ({ phrase, backgroundImage }) => {
  return (
    <div
      className="bg-white bg-opacity-25 w-auto h-auto mx-4 2xl:w-3/5 2xl:h-2/5 bg-cover rounded-2xl flex flex-col items-center justify-around gap-0 shadow-xl shadow-red-600 box-content mt-12 mb-8"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex items-center justify-center mx-auto px-auto">
        <p className=" text-white text-center text-md xl:text-xlfont-semibold 2xl:mx-4 mx-auto p-4 px-auto py-auto 2xl:text-3xl md:text-xl">{phrase.quote}</p>
      </div>
      <div>
        <h2 className="text-red-600 text-xl font-bold text-center xl:text-3xl 2xl:text-4xl lg:text-3xl md:text-2xl">{phrase.author}</h2>
      </div>
    </div>
  );
};

export default Card;