import React, { useEffect, useState } from "react";
import '../pages/css/campeoes.css'
import lolWhite from '../assets/lol-image-white-logo.png'
import Menu from '../components/menu'
import video from '../assets/warriors-video.mp4'
import Footer from '../components/footer'
import championsList from '../data/champions'
import Champions from '../pages/cardChampions'
import nextPage from '../assets/icon-next-page.png'
import backPage from '../assets/icon-back-page.png'
import iconChampion from '../assets/icon-champions-page.png'

function Campeoes(){

  const [page, setPage] = useState(0)

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

        <div className="title-champions-text-page">
          <div className="container-champions">
            <div className="content-main-titles-champions">
            <p className="text-champions-subtitle">CONHEÇA OS</p>
            <p className="text-champions-main">CAMPEÕES</p>
            </div>
            <div className="lines-champions"></div>
            <img src={iconChampion} className="iconeteste" alt="pspsps" />
          </div>
        </div>

        <div className="champions-content">
            <Champions champions={championsList[page]}/>
        </div>

        <div className="buttons-next-page">
          <div className="container-champions">
          <button className="button-pages previus" onClick={() => setPage(page - 1)} disabled={page === 0}><img className="icon-pages-button backpage" src={backPage} alt="Voltar pagina" />Pagina Anterior</button>
          <button className="button-pages next" onClick={() => setPage(page + 1)} disabled={page === championsList.length - 1}>Avançar Pagina <img className="icon-pages-button nextpage" src={nextPage} alt="Próxima pagina" /></button>
          </div>
        </div>
  
        <Footer />
        </div>
        </>
    )
}

export default Campeoes