import React from 'react'


const Cartcard = ({ img, name, price, id, removeFromCart }) => {
  return (
    <div className='sidebar_card flex'>
      <div className="sidebar_card-img">
        <img src={img} alt="product" />
      </div>
      <div className="flex-column sidebar_card-text">
        <p>{name}</p>
        <p><span>1 × </span><span>{price}</span></p>
      </div>
      <button className="sidebar_card-remove_btn" onClick={() => removeFromCart(id)}>✕</button>
    </div>
  )
}

export default Cartcard
