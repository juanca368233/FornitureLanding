// Se mostraran los ultimos datos o informacion de la web
import '../styles/Footer.css'

const Footer = () => {
    return (
        <footer>
            <div>
                <h2>Categorías</h2>
                <nav>
                    <a href="">Oficina</a>
                    <a href="">Hogar</a>
                    <a href="">Cocina</a>
                    <a href="">Garaje</a>
                </nav>
            </div>

            <div>
                <h2>Sobre Nosotros</h2>
                <nav>
                    <a href="">Nuestra historia</a>
                    <a href="">Misión y visión</a>
                    <a href="">Términos del servicio</a>
                    <a href="">Costo del servicio</a>              
                </nav>
            </div>

            <div>
                <h2>Soporte</h2>
                <a href="">Preguntas frecuentes</a>
                <a href="">Contactar a un asesor</a>
                <a href="">Confianza y seguridad</a>
                <a href="">Centro de ayuda</a>
            </div>

            <p>© Todos los derechos reservados 2025</p>
        </footer>
    )
}

export default Footer