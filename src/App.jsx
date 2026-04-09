// Importing all required components for the layout
import Header from "./components/Header"
import Hero from "./components/hero"
import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import Videobanner from "./components/Videobanner"
import Images from "./components/Images"
import Blueupper from "./components/Blueupper"
import Amazoncard from "./components/Amazoncard"
import Clients from "./components/Clients"
import Customer from "./components/Customer"
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar"
// Importing product images
import product1 from './assets/images/products/product1.webp'
import product2 from './assets/images/products/product2.webp'
import product3 from './assets/images/products/product3.webp'
import product4 from './assets/images/products/product4.webp'
// React hook for managing state
import { useState } from "react"

function App() {
  // State to control whether the sidebar (cart panel) is open or not
  const [panelOpen, setPanelOpen] = useState(false)
  // State to store items added to the cart
  const [cart, setCart] = useState([])
  
  // Function to add an item to the cart

  const addToCart = (item) => {
    const alreadyInCart = cart.find(i => i.id === item.id)
    if (alreadyInCart) {
      setPanelOpen(true)
      return
    }
    setCart([...cart, item])
    setPanelOpen(true)
  }

  const removeFromCart = (id) => {
    setCart(cart.filter(i => i.id !== id))
  }

  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[₹,]/g, ""))
    return sum + price
  }, 0)
  return (
    <>
      {/* Top header with cart button */}
      <Header setPanelOpen={setPanelOpen} />
      <Navbar />
      <Hero />
      <Banner />
      <Videobanner />
      {/* Sidebar (shopping cart panel) */}
      <Sidebar cart={cart} removeFromCart={removeFromCart} total={total} panelOpen={panelOpen} setPanelOpen={setPanelOpen} />
      {/* Image grid section */}
      <Images></Images>
      {/* Product section (blue background) */}
      <article className="bluearea">
        <Blueupper />
        <div className="blue_mid">
          <Amazoncard img={product1} name="Gigabyte GS27QA 27 Inch Gaming Monitor" newPrice="₹14,990.00" oldPrice="₹45,000.00" emi="₹1372" addToCart={addToCart} id="1"/>
          <Amazoncard img={product2} name="Lenovo Legion R25F-30 25 Inch Gaming Monitor" newPrice="₹12,890.00" oldPrice="₹20,290.00" emi="₹1179" addToCart={addToCart} id="2"/>
          <Amazoncard img={product3} name="LG UltraGear 24GS65F-B 24 Inch Gaming Monitor" newPrice="₹10,390.00" oldPrice="₹20,000.00" emi="₹951" addToCart={addToCart} id="3"/>
          <Amazoncard img={product4} name="MSI MAG 255F E20 25 INCH FHD Gaming Monitor" newPrice="₹9,490.00" oldPrice="₹12,999.00" emi="₹1242" addToCart={addToCart} id="4"/>
        </div>
      </article>
      {/* Clients/brands section */}
      <Clients />
      {/* Customer reviews section */}
      <Customer />
      {/* Footer */}
      <Footer />
    </>
  )
}

export default App
