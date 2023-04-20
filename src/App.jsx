import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import Button from './components/Button';
import Phrases from './assets/phrases.json';
import { motion } from "framer-motion";
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

  const changeBackgroundImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    console.log(`Changing background image to ${images[randomIndex]}`);
    setBackgroundImage(images[randomIndex]);
  };

  const prefetchImages = () => {
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
      <Card phrase={Phrases[indexPhrase]} />
      <div className="flex flex-col sm:flex-row justify-center items-center mt-4 space-y-2 sm:space-y-0 sm:space-x-4">
      <Button label="Change Phrase"
       changePhrase={changePhrase}
       changeBackgroundImage={changeBackgroundImage}
       />
      </div>
    </div>
  );
}

export default App;