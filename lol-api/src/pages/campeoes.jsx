import React from "react";
import lolWhite from '../assets/lol-image-white-logo.png'
import Menu from '../components/menu'
import video from '../assets/warriors-video.mp4'
import Footer from '../components/footer'

function Campeoes(){
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
        <Footer />
        </div>
        </>
    )
}

export default Campeoes