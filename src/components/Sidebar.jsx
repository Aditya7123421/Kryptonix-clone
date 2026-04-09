import React from 'react'
import Cartcard from './Cartcard'

// Sidebar component: handles cart display, overlay, and checkout section

const Sidebar = ({ panelOpen, setPanelOpen, cart, removeFromCart, total }) => {
  return (
    <>
      {/* Background overlay (click to close sidebar) */}
      <div className={`overlay ${panelOpen ? 'active' : ''}`} onClick={() => setPanelOpen(false)}></div>
      {/* Sidebar panel (slides in when active) */}
      <aside className={`sidebar ${panelOpen ? 'active' : ''}`}>
        {/* Header with title and close button */}
        <header className="flex sidebar_header">
          <p>Shopping Cart</p>
          <p id="closeBtn" onClick={() => setPanelOpen(false)}>close <span style={{ fontSize: '1.5rem' }}>×</span></p>
        </header>
        <main>
          {/* Message when cart is empty */}
          <div className={`sidebar_empty ${cart.length !== 0 ? 'hidden' : ''}`}>No products in the cart.</div>
          {/* List of cart items */}
          <div className="sidebar-cart">
            {cart.map(item => (
              <Cartcard key={item.id} {...item} removeFromCart={removeFromCart} />
            ))}
          </div>
        </main>
        {/* Footer: subtotal + actions (only shown if cart has items) */}
        <div className={`sidebar-footer ${cart.length === 0 ? 'hidden' : ''}`}>
          {/* Total price calculation */}
          <div className="sidebar-subtotal">
            <span>Subtotal:</span>
            <span className="subtotal-price">₹{total.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</span>
          </div>
          {/* Action buttons */}
          <button className="sidebar-btn">View Cart</button>
          <button className="sidebar-btn">Checkout</button>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
