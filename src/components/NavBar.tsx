//Debemo recordar que como primer paso, se debe realizar la importacion de los elementos que vamos a utilizar, en este caso recursos visuales

import Logo from "../assets/2x/Logo.svg"
import '../styles/NavBar.css'

// Vamos a crear el componente header para agregarlo en la parte superior de la pagina

const NavBarSection = () => {
    return (
        <nav className="NavBar">
            <img src= {Logo} alt="Header Logo" className="LogoImg"/>
            <ul>
                <a href="">Inicio</a>
                <a href="">Nosotros</a>
                <a href="">Tienda</a>
                <a href="">Blog</a>
                <a href="">Galería</a>
            </ul>
        </nav>
    )
}

export default NavBarSection