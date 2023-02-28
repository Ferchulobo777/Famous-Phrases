import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import Button from './components/Button';
import Phrases from './assets/phrases.json';
import backgroundImage1 from './assets/imagenes/Filosofia/1.jpg';
import backgroundImage2 from './assets/imagenes/Filosofia/2.jpg';
import backgroundImage3 from './assets/imagenes/Filosofia/3.jpg';
import backgroundImage4 from './assets/imagenes/Filosofia/4.jpg';
import backgroundImage5 from './assets/imagenes/Filosofia/5.jpg';
import backgroundImage6 from './assets/imagenes/Filosofia/6.jpg';
import backgroundImage7 from './assets/imagenes/Filosofia/7.jpg';
import backgroundImage8 from './assets/imagenes/Filosofia/8.jpg';
import backgroundImage9 from './assets/imagenes/Filosofia/9.jpg';
import backgroundImage10 from './assets/imagenes/Filosofia/10.jpg';
import backgroundImage11 from './assets/imagenes/Filosofia/11.jpg';

function App() {
  useEffect(() => {
    prefetchImages();
  }, []);

  const [indexPhrase, setPhrase] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState(backgroundImage1);

  const changePhrase = () => {
    const newPhraseVisible = indexPhrase + 1;
    if (newPhraseVisible >= Phrases.length) setPhrase(0);
    else setPhrase(newPhraseVisible);
  };

  const changeBackgroundImage = () => {
    if (backgroundImage === backgroundImage1) setBackgroundImage(backgroundImage2);
    else if (backgroundImage === backgroundImage2) setBackgroundImage(backgroundImage3);
    else if (backgroundImage === backgroundImage3) setBackgroundImage(backgroundImage4);
    else if (backgroundImage === backgroundImage4) setBackgroundImage(backgroundImage5);
    else if (backgroundImage === backgroundImage5) setBackgroundImage(backgroundImage6);
    else if (backgroundImage === backgroundImage6) setBackgroundImage(backgroundImage7);
    else if (backgroundImage === backgroundImage7) setBackgroundImage(backgroundImage8);
    else if (backgroundImage === backgroundImage8) setBackgroundImage(backgroundImage9);
    else if (backgroundImage === backgroundImage9) setBackgroundImage(backgroundImage10);
    else if (backgroundImage === backgroundImage10) setBackgroundImage(backgroundImage11);
    else setBackgroundImage(backgroundImage1);
  };

  const prefetchImages = () => {
    const images = [
      backgroundImage1,
      backgroundImage2,
      backgroundImage3,
      backgroundImage4,
      backgroundImage5,
      backgroundImage6,
      backgroundImage7,
      backgroundImage8,
      backgroundImage9,
      backgroundImage10,
      backgroundImage11,
    ];
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  };

  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="w-screen h-screen sm:mx-4 my-auto md:w-screen md:h-screen m-0 p-0 md:m-0 md:p-0 sm:m-0 sm:p-0 lg:m-0 lg:p-0 xl:m-0 xl:p-0 2xl:m-0 2xl:p-0 flex flex-col items-center justify-center bg-cover bg-center sm:w-screen sm:h-screen box-content sm-p-0"
    >
      <div className="bg-white bg-opacity-25 rounded-2xl shadow-xl shadow-red-600 md:w-2/5 md:h-28 2xl:y-10 flex flex-col justify-center items-center container w-3/4 h-1/5 mx-2 mt-6">
        <h1 className="bg-transparent text-white text-4xl md:text-4xl flex items-center justify-center text-center font-bold shadow-lg shadow-red-500 px-auto md:w- rounded-2xl md:p-4 mx-2 w-full h-full xl:text-6xl lg:text-5xl sm:text-5xl">Famous Phrases</h1>
      </div>
      <Card phrase={Phrases[indexPhrase]} />
      <Button handleClick={() => { changePhrase(); changeBackgroundImage(); }} />
    </div> 
  );
}

export default App;