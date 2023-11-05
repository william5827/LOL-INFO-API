import React from 'react'
import video from '../assets/congregacao-bruxas-video.mp4'
import './css/homepage.css'
import lolWhite from './../assets/lol-image-white-logo.png'
import ImgAkali from '../assets/lol-image-akali.png'
import videoAssassins from '../assets/video-assassins.webm'
import videoCarrys from '../assets/video-carrys.webm'
import videoSups from '../assets/video-sups.webm'
import ImgJinx from '../assets/lol-image-jinx.png'
import ImgThresh from '../assets/lol-image-thresh.png'

function Homepage() {
  return (
    <>
      <div className='homepage'>

        <div className='banner-homepage'>
          <video autoPlay muted loop >
            <source src={video} type="video/mp4" />
          </video>
        </div>
         <div className='text-banner'>
          <img src={lolWhite} alt="lol-white-logo" className="image-title-banner" />
        </div> 

        <div className="homepage-content-game akali">
        <div className="filter-img-background-jinx">
          <div className="container-homepage">
            <div className="content-game-text akali">
              <div className="title-text-game">
                <div className="main-title-text-game"><p>CONHEÇA O</p></div>
                <div className="main-subtitle-text-game"><p>LEAGUE OF LEGENDS</p></div>
              </div>
              <div className="descrition-text-game">
                <p>League of Legends é um jogo eletrônico do gênero MOBA desenvolvido e publicado pela Riot Games.
                Foi lançado em outubro de 2009 para Microsoft Windows e em março de 2013 para macOS.
                No jogo, duas equipes de cinco jogadores batalham em um combate PvP,
                com cada equipe ocupando e defendendo sua metade do mapa. Cada um dos dez jogadores
                controla um personagem, conhecido como "campeão", com habilidades únicas e diferentes estilos de jogo. </p>
              </div>
              <div className="content-game-video akali">
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
        </div>

        <div className="homepage-content-game jinx">
        <div className="filter-img-background-jinx">
          <div className="container-homepage">
          <div className="content-game-image">
              <div className="content-border-image jinx">
                <img src={ImgJinx} alt="akali-img" />
              </div>
            </div>
            <div className="content-game-text jinx">
              <div className="title-text-game jinx">
                <div className="main-title-text-game"><p>ESCOLHA SEU</p></div>
                <div className="main-subtitle-text-game jinx"><p>CAMPEÃO</p></div>
              </div>
              <div className="descrition-text-game jinx">
                <p>Com mais de 140 Campeões, você encontrará a combinação perfeita para seu estilo de jogo.
                  Especialize-se em um estilo ou em todos. Nenhum Campeão corresponde ao critério do filtro. Você pode
                  jogar em até 5 funções diferentes, Topo, Selva, Meio, Atirador e Suporte. </p>
              </div>
              <div className="content-game-video jinx">
              <video className="video-assassins" autoPlay muted loop >
              <source src={videoCarrys} type="video/mp4" />
              </video>
              </div>
            </div>  
          </div>
          </div>
        </div>

        <div className="homepage-content-game thresh">
        <div className="filter-img-background-jinx">
          <div className="container-homepage">
            <div className="content-game-text jinx">
              <div className="title-text-game jinx">
                <div className="main-title-text-game"><p>DOMINE SEUS</p></div>
                <div className="main-subtitle-text-game jinx"><p>INIMIGOS</p></div>
              </div>
              <div className="descrition-text-game jinx">
                <p>Summoner's Rift é o principal modo de jogo de League of Legends e o mais proeminente a nível profissional.
                  Ele possui um modo ranqueado competitivo, onde um sistema de matchmaking determina o nível de habilidade
                  de um jogador e gera uma classificação inicial a partir da qual ele pode subir.
                  Existem nove níveis, conhecidos como "elos", os mais baixos são Ferro, Bronze e Prata,
                  e os mais altos são Mestre, Grão-Mestre e Desafiante. </p>
              </div>
              <div className="content-game-video jinx">
              <video className="video-assassins" autoPlay muted loop >
              <source src={videoSups} type="video/mp4" />
              </video>
              </div>
            </div> 
            <div className="content-game-image">
              <div className="content-border-image thresh">
                <img src={ImgThresh} alt="akali-img" />
              </div>
            </div> 
          </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Homepage