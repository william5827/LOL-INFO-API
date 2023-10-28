import React from "react";
import '../components/css/footer.css'
import linkedinLogo from '../assets/icon-linkedin.png'
import githubLogo from '../assets/icon-github.png'
import emailLogo from '../assets/icon-email.png'

export default function Footer(){
    return(
        <>
        <div className="footer">
            <div className="gif-footer">
              <div className="buttons-footer-gif">
                <div className="title-buttons-gif">
                  <p>Meus contatos</p>
                </div>
                <div className="buttons-contact">
                <button className='linkedin-button spacing-gif-button'><img className="icon-button-gif" src={linkedinLogo} alt="linkedin" />William Matos</button>
                <button className='github-button spacing-gif-button'><img className="icon-button-gif" src={githubLogo} alt="github" />william5827</button>
                <button className='email-button spacing-gif-button'><img className="icon-button-gif" src={emailLogo} alt="email" />wiusk8@gmail.com</button>
                </div>
              </div>
            </div>
            <div className="footer-container">
            
            </div>
        </div>
        </>
    )
}