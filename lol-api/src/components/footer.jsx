import React from "react";
import '../components/css/footer.css'
import linkedinLogo from '../assets/icon-linkedin.png'
import githubLogo from '../assets/icon-github.png'
import emailLogo from '../assets/icon-email.png'
import pessoalLogo from '../assets/pessoal-logo-white.png'
import meImage from '../assets/wiu.jpg'
import instaLogo from '../assets/icon-instagram.png'
import iconHtml from '../assets/icon-html.png'
import iconCss from '../assets/icon-css.png'
import iconJs from '../assets/icon-js.png'
import iconReact from '../assets/icon-react.png'

export default function Footer(){
    return(
        <>
        <div className="footer">
            <div className="gif-footer">
              <div className="buttons-footer-gif">
                <div className="border-button-portfolio">
                <button className="button-gif-portfolio">Conheça Meu Portfólio</button>
                </div>
              </div>
            </div>
            <div className="header-content-fotter">
              <div className="footer-container">
                  <div className="text-header-content-footer">
                    <p>Projeto em desenvolvimento por <b>William Da Silva Matos</b></p>
                  </div>
              </div>
            </div>
            <div className="middle-content-footer">
              <div className="footer-container">
                  <div className="title-tecnologias">
                    <p><b>Tecnologias utilizadas</b></p>
                  </div>
                  <div className="images-tecnologias">
                    <img className="icon-tecnologias css" src={iconCss} alt="Css 3" />
                    <img className="icon-tecnologias html" src={iconHtml} alt="Html 5" />
                    <img className="icon-tecnologias" src={iconJs} alt="JavaScript" />
                    <img className="icon-tecnologias" src={iconReact} alt="React Js" />
                  </div>
              </div>
            </div>
            <div className="bottom-content-footer">
              <div className="footer-container">
                <div className="image-pessoal-logo-footer">
                  <img src={pessoalLogo} alt="William Project" />
                </div>
                <div className="buttons-contact-footer">
                  <div className="buttons-contact">
                    <button className='linkedin-button spacing-gif-button'><img className="icon-button-gif" src={linkedinLogo} alt="linkedin" /></button>
                    <button className='github-button spacing-gif-button'><img className="icon-button-gif" src={githubLogo} alt="github" /></button>
                    <button className='email-button spacing-gif-button'><img className="icon-button-gif" src={emailLogo} alt="email" /></button>
                    <button className='email-button spacing-gif-button'><img className="icon-button-gif" src={instaLogo} alt="email" /></button>
                  </div>
                  <div className="menu-footer">
                    <ul className='navbar-footer'>
                      <li><a className='navbar_a_footer' href="/home">HOME</a></li>
                      <li><a className='navbar_a_footer' href="/champions">CAMPEÕES</a></li>
                      <li><a className='navbar_a_footer' href="/">MAPA</a></li>
                      <li><a className='navbar_a_footer' href="/">UNIVERSO</a></li>
                    </ul>
                  </div>
                </div>
                <div className="image-me-footer">
                  <img src={meImage} alt="William matos" />
                </div>
              </div>
            </div>
        </div>
        </>
    )
}