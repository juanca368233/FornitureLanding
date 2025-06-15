import '../styles/AboutUs.css'
import AboutImg from '../assets/AboutUsSection/AboutUs.jpg'

// Seccion Acerca de Nosotros. 

const AboutUs = () => {
    return (
        <section>
            <div>
                <h2>Sobre Nosotros</h2>
                    <p>Desde su fundación en 2012, Moka Decors ha transformado espacios en hogares y oficinas que inspiran. Con más de 12 años en el mercado, nuestra empresa, ubicada en Bogotá, se ha consolidado como un referente en diseño, fabricación y comercialización de muebles de alta calidad para oficina, hogar y cocina.
                    Cada una de nuestras piezas combina funcionalidad, estilo y durabilidad, respaldada por certificaciones de calidad nacional que garantizan acabados impecables y materiales resistentes. En Moka Decors creemos que el mobiliario no solo debe ocupar un espacio, sino aportar bienestar, elegancia y armonía a la vida cotidiana.</p>

                <img src={AboutImg} alt="" />

            </div>
        </section>
    )
}


export default AboutUs