import React from 'react'
import video from '../assets/congregacao-bruxas-video.mp4'
import './css/homepage.css'
import lolWhite from './../assets/lol-image-white-logo.png'
import Footer from '../components/footer'
import Menu from '../components/menu'
import ImgAkali from '../assets/lol-image-akali.png'
import videoAssassins from '../assets/video-assassins.webm'

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

        <div className="homepage-content-game">
          <div className="container-homepage">
            <div className="content-game-text">
              <div className="title-text-game">
                <div className="main-title-text-game"><p>CONHEÇA O</p></div>
                <div className="main-subtitle-text-game"><p>LEAGUE OF LEGENDS</p></div>
              </div>
              <div className="descrition-text-game">
                <p>League of Legends é um jogo eletrônico do gênero MOBA desenvolvido e publicado pela Riot Games.
                Foi lançado em outubro de 2009 para Microsoft Windows e em março de 2013 para macOS.
                Inspirado em DOTA, uma modificação de Warcraft III,
                os fundadores da Riot buscaram desenvolver um jogo autônomo do mesmo gênero.
                No jogo, duas equipes de cinco jogadores batalham em um combate PvP,
                com cada equipe ocupando e defendendo sua metade do mapa. Cada um dos dez jogadores
                controla um personagem, conhecido como "campeão", com habilidades únicas e diferentes estilos de jogo. </p>
              </div>
              <div className="content-game-video">
              <video className="video-assassins" autoPlay muted loop >
              <source src={videoAssassins} type="video/mp4" />
              </video>
              </div>
            </div>
            <div className="content-game-image">
              <div className="content-border-image">
                <img src={ImgAkali} alt="akali-img" />
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  )
}

export default Homepage
