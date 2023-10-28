import React from 'react'
import video from '../assets/congregacao-bruxas-video.mp4'
import './css/homepage.css'
import lolWhite from './../assets/lol-image-white-logo.png'
import Footer from '../components/footer'
import Menu from '../components/menu'

function Homepage() {
  return (
    <>
      <div className='homepage'>
        <Menu />
        <div className='banner-homepage'>
          <video autoPlay muted loop >
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div className='text-banner'>
          <img src={lolWhite} alt="lol-white-logo" className="image-title-banner" />
        </div>

        <div className="teste-xxxxxx">
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </div>
        
        <Footer />
      </div>
    </>
  )
}

export default Homepage
