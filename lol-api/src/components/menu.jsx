import logoLOL from './../assets/lol-image-white-icon.png'
import '../components/css/menu.css'

export default function Menu(){
    return(
        <>
         <div className='header-homepage'>
          <div className='container-homepage'>
            <div className='navbar-logo'><img src={logoLOL} alt="logoLoL" /></div>
            <ul className='navbar-homepage'>
              <li><a className='navbar_a' href="/">HOME</a></li>
              <li><a className='navbar_a' href="/champions">CAMPEÕES</a></li>
              <li><a className='navbar_a' href="/">MAPA</a></li>
              <li><a className='navbar_a' href="/">UNIVERSO</a></li>
            </ul>
          </div>
        </div>
        </>
    )
}