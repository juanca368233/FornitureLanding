import '../styles/features.css'
import FeatureImage1 from '../assets/categoria1.jpg'
import FeatureImage2 from '../assets/categoria2.jpg'
import FeatureImage3 from '../assets/categoria3.jpg'


const FeaturesSection = () => {
    return (
        <section className='FeatureSection'>
            <h2>Categorías de producto</h2>
            <div className='Category1'>
                <img src={FeatureImage1} alt="Imagen Categoría 1" />
                <a href="#">Oficina</a>
            </div>

            <div className='Category2'>
                <img src={FeatureImage2} alt="Imagen Categoría 2" />
                <a href="#">Hogar</a>
            </div>
            
            <div className='Category3'>
                <img src={FeatureImage3} alt="Imagen Categoría 3" />
                <a href="#">Cocina</a>
            </div>
        </section>
    )
}




export default FeaturesSection