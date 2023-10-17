import React from 'react'
import video from '../assets/Fiddlesticks-video-melhor.mp4'
import './css/homepage.css'
import logoLOL from './../assets/lol-icon-homepage.jpg'

function Homepage() {
    return (
      <>
      <div className='homepage'>
        <div className='header-homepage'>
          <div className='container-homepage'>
              <div className='navbar-logo'><img src={logoLOL} alt="logoLoL" /></div>
              <ul className='navbar-homepage'>
                <li><a className='navbar_a' href="/">HOME</a></li>
                <li><a className='navbar_a' href="/">CAMPEÕES</a></li>
                <li><a className='navbar_a' href="/">MAPA</a></li>
                <li><a className='navbar_a' href="/">UNIVERSO MUSICAL</a></li>
              </ul>
          </div>
        </div>
      <div className='banner-homepage'>
        <video autoPlay muted loop >
        <source src={video} type="video/mp4"/>
        </video>
        <div className='text-banner'>
          <p className='p-title-banner'>LEAGUE OF LEGENDS INFO API</p>
          <p className='p-subtitle-banner'>Veja aqui informações sobre os campeões, regiões do jogo,
           histórias dos personagens e muito mais.</p>
        </div>
      </div>
      </div>
      </>
    )
  }
  
  export default Homepage
  