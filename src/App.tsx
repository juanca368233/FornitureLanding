
import './App.css'
import FeaturesSection from './components/Features'
import HeroSection from './components/hero'
import NavBarSection from './components/NavBar'
import AboutUs from './components/AboutUs'
import Products from './components/Products'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div>
      <NavBarSection/>
      <HeroSection/>
      <FeaturesSection/>
      <AboutUs/>
      <Products/>
      <Footer/>
      </div>
    </>
  )
}

export default App
