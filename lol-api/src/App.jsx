import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import image1 from './assets/lol-image-jinx-icon.png'
import image3 from './assets/lol-image-jinx-icon-three.jpg'
import CharacterPage from './pages/character/index'
import Campeoes from './pages/campeoes'
import { LayoutClient } from './layout'
import Home from './pages/homepage'

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
    }, 12000);

    return () => clearInterval(timer);
  }, []);

  return (
    <BrowserRouter>

      <LayoutClient>

        <Switch>

          <Route path='/' exact>
            <div>Hellow world</div>
          </Route>

          <Route path='/character/:id'>
            <CharacterPage />
          </Route>

          <Route path='/champions'>
            <Campeoes />
          </Route>

          <Route path='/home'>
            <Home />
          </Route>

          {/* <div className='bg-app'>
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
      </div>       */}
        </Switch>

      </LayoutClient>

    </BrowserRouter>
  )
}

export default App
