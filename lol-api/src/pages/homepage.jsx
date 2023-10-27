import React from 'react'
import video from '../assets/congregacao-bruxas-video.mp4'
import './css/homepage.css'
import logoLOL from './../assets/lol-image-white-icon.png'
import lolWhite from './../assets/lol-image-white-logo.png'

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
          <img src={lolWhite} alt="lol-white-logo" className="image-title-banner" />
        </div>
      </div>    

      </div>
      </>
    )
  }
  
  export default Homepage
  