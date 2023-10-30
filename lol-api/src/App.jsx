import React, { useEffect, useState } from 'react'
import './App.css'
import image1 from './assets/lol-image-jinx-icon.png'
import image3 from './assets/lol-image-jinx-icon-three.jpg'

function App() {

  const [currentImage, setCurrentImage] = useState(
    image1
  );

  const images = [
    image1,
    image3
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setCurrentImage(images[randomIndex]);

      console.log(currentImage);
    }, 12000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className='bg-app'>
       <div className='filter-black-homepage'>
          <div className='banner-homepage-app'>
          <div className='banner-content'>
              <div className="menu-app">
                <p className='text-menu-app'>INICIO</p>
                <p className='text-menu-app'>CAMPEÕES</p>
                <p className='text-menu-app'>MAPA</p>
                <p className='text-menu-app'>UNIVERSO</p>
              </div>
            </div>

            <div className='banner-images'>
                <div className='bi-1'></div>
                <div className='bi-3'></div>
                <div style={{backgroundImage: `url(${currentImage})`}} className='bi-2'></div>
            </div>
           
            </div>
          </div>
      </div>
    
    </>
  )
}

 {/* <div className='banner-content-text'>
               <div className='banner-social-media'>
                  <button className='linkedin-button'><img src={linkedinLogo} alt="linkedin" />William Matos</button>
                  <button className='github-button'><img src={githubLogo} alt="github" />william5827</button>
                  <button className='email-button'><img src={emailLogo} alt="email" />wiusk8@gmail.com</button>
                </div>
                <div className='text-welcome'>
                  <p>SEJA BEM-VINDO AO LOL API</p>
                </div>
                <div className='text-about'>
                  <p>Esse projeto é voltado para o aprendizado de criação de api e a prática de técnologias como React, Node Express e outros.
                    Espero que se divirta navegando por aqui tanto quanto eu me diverti criando tudo isso. 
                  </p>
                </div>
                <div className='text-button'>
                  <button className='button-start'>Começar</button>
                </div>
            </div>*/}

export default App
