import React from 'react'
import './App.css'
import kaisa from './assets/lol-kaisa-image.jpg'
import linkedinLogo from './assets/icon-linkedin.png'
import githubLogo from './assets/icon-github.png'
import emailLogo from './assets/icon-email.png'

function App() {
  return (
    <>
      <div className='bg-app'>
       
          <div className='banner-homepage'>
            <div className='banner-images'>
                <div className='bi-1'></div>
                <div className='bi-3'></div>
                <div className='bi-2'><img src={kaisa} className='kaisa-img' alt="Kai'sa" /></div>
            </div>
            <div className='banner-content'>
              <div className='banner-content-text'>
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
              </div>
            </div>
          </div>
      </div>
    
    </>
  )
}

export default App
