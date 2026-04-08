import Header from "./components/Header"
import Hero from "./components/hero"
import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import Videobanner from "./components/Videobanner"
import Images from "./components/Images"
import Blueupper from "./components/Blueupper"
import Amazoncard from "./components/Amazoncard"
import product1 from './assets/images/products/product1.webp'
import product2 from './assets/images/products/product2.webp'
import product3 from './assets/images/products/product3.webp'
import product4 from './assets/images/products/product4.webp'
import Clients from "./components/Clients"
import Customer from "./components/Customer"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Header />
      <Navbar/>
      <Hero />
      <Banner/>
      <Videobanner/>
      <Images></Images>
      <article className="bluearea">
        <Blueupper/>
        <div className="blue_mid">
          <Amazoncard img = {product1} name = "Gigabyte GS27QA 27 Inch Gaming Monitor" newPrice ="₹14,990.00" oldPrice="₹45,000.00" emi ="₹1372"/>
          <Amazoncard img = {product2} name = "Lenovo Legion R25F-30 25 Inch Gaming Monitor" newPrice ="₹12,890.00" oldPrice="₹20,290.00" emi ="₹1179"/>
          <Amazoncard img = {product3} name = "LG UltraGear 24GS65F-B 24 Inch Gaming Monitor" newPrice ="₹10,390.00" oldPrice="₹20,000.00" emi ="₹951"/>
          <Amazoncard img = {product4} name = "MSI MAG 255F E20 25 INCH FHD Gaming Monitor" newPrice ="₹9,490.00" oldPrice="₹12,999.00" emi ="₹1242"/>
        </div>
      </article>
      <Clients />
      <Customer/>
      <Footer/>
    </>
  )
}

export default App
