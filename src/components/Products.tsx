// En este componente vamos a estar mostrando los productos disponibles de la pagina.
import Product1 from "../assets/producto1.jpg"
import Product2 from "../assets/producto2.jpg"
import Product3 from "../assets/producto3.jpg"
import Product4 from "../assets/producto4.jpg"
import Product5 from "../assets/producto5.jpg"
import Product6 from "../assets/producto6.jpg"

const Products = () => {
    return (
        <section>
            <h1>Nuestros productos</h1>
            {/* Contenedor de productos */}
            <div>
                {/* Contenedor del producto 1 */}
                <div>
                    <img src= {Product1} alt="" />
                    <div>
                        <h2>Producto 1</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p>$ 350.000</p>
                        <a href="#">Agregar al carrito</a>
                    </div>                   
                </div> 
                
                
                {/* Contenedor del producto 2 */}
                <div>
                    <img src= {Product2} alt="" />
                    <div>
                        <h2>Producto 1</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p>$ 350.000</p>
                        <a href="#">Agregar al carrito</a>
                    </div>                   
                </div> 
                
                
                {/* Contenedor del producto 3 */}
                <div>
                    <img src= {Product3} alt="" />
                    <div>
                        <h2>Producto 1</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p>$ 350.000</p>
                        <a href="#">Agregar al carrito</a>
                    </div>                   
                </div> 
                
                
                {/* Contenedor del producto 4 */}
                <div>
                    <img src= {Product4} alt="" />
                    <div>
                        <h2>Producto 1</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p>$ 350.000</p>
                        <a href="#">Agregar al carrito</a>
                    </div>                   
                </div> 
                
                
                {/* Contenedor del producto 5 */}
                <div>
                    <img src= {Product5} alt="" />
                    <div>
                        <h2>Producto 1</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p>$ 350.000</p>
                        <a href="#">Agregar al carrito</a>
                    </div>                   
                </div> 
                
                
                {/* Contenedor del producto 6 */}
                <div>
                    <img src= {Product6} alt="" />
                    <div>
                        <h2>Producto 1</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p>$ 350.000</p>
                        <a href="#">Agregar al carrito</a>
                    </div>                   
                </div> 


            </div> {/* Fin Contenedor de productos */}
        </section>
    )
}

export default Products