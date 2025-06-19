//Debemo recordar que como primer paso, se debe realizar la importacion de los elementos que vamos a utilizar, en este caso recursos visuales

import Logo from "../assets/2x/Logo.svg"
import '../styles/NavBar.css'

// Vamos a crear el componente header para agregarlo en la parte superior de la pagina

const NavBarSection = () => {
    return (
        <nav className="NavBar">
            <img src= {Logo} alt="Header Logo" className="LogoImg"/>
            <ul className="Accesos">
                <li><a href="">Inicio</a></li>
                <li><a href="">Nosotros</a></li>
                <li><a href="">Tienda</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Galería</a></li>
            </ul>
        </nav>
    )
}

export default NavBarSection