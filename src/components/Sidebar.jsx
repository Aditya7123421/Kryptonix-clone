import React from 'react'
import Cartcard from './Cartcard'

const Sidebar = ({ panelOpen, setPanelOpen, cart, removeFromCart, total }) => {
  return (
    <>
      <div className={`overlay ${panelOpen ? 'active' : ''}`} onClick={() => setPanelOpen(false)}></div>
      <aside className={`sidebar ${panelOpen ? 'active' : ''}`}>
        <header className="flex sidebar_header">
          <p>Shopping Cart</p>
          <p id="closeBtn" onClick={() => setPanelOpen(false)}>close <span style={{ fontSize: '1.5rem' }}>×</span></p>
        </header>
        <main>
          <div className={`sidebar_empty ${cart.length !== 0 ? 'hidden' : ''}`}>No products in the cart.</div>
          <div className="sidebar-cart">
            {cart.map(item => (
              <Cartcard key={item.id} {...item} removeFromCart={removeFromCart} />
            ))}
          </div>
        </main>
        <div className={`sidebar-footer ${cart.length === 0 ? 'hidden' : ''}`}>
          <div className="sidebar-subtotal">
            <span>Subtotal:</span>
            <span className="subtotal-price">₹{total.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</span>
          </div>
          <button className="sidebar-btn">View Cart</button>
          <button className="sidebar-btn">Checkout</button>
        </div>
      </aside>
    </>
  )
}

export default Sidebar