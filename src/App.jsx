import { useState } from 'react';
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

  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="min-w-450px md:m-0 md:p-0 md:w-screen md:h-screen flex flex-col items-center justify-start"
    >
      <div className="bg-transparent min-w-480 max-w-4xl md:w-3/6 md:h-6/5 flex flex-col justify-start items-center mt-28">
        <h1 className="text-white box text-7xl font-bold shadow-lg shadow-red-500">Frases Celebres</h1>
      </div>
      <Card Phrases={Phrases[indexPhrase]} changePhrase={changePhrase} />
      <Button handleClick={() => {changePhrase(); changeBackgroundImage();}} />
    </div> 
  );
}

export default App;