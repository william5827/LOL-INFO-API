import React, { useEffect, useState }  from "react";
import './styles.css'
import image1 from '../../assets/lol-image-jinx-icon.png'
import image3 from '../../assets/lol-image-jinx-icon-three.jpg'

function Inicio(){

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

    return(
        <div className='bg-app'>
       <div className='filter-black-homepage'>
          <div className='banner-homepage-app'>
          <div className='banner-content'>
              <div className="menu-app">
                <a href="/home"><p className='text-menu-app'>INICIO</p></a>
                <a href="/champions"><p className='text-menu-app'>CAMPEÕES</p></a>
                <a href=""><p className='text-menu-app'>MAPA</p></a>
                <a href=""><p className='text-menu-app'>UNIVERSO</p></a>
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
    )
}

export default Inicio