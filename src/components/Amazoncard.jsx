import React from 'react'
import product1 from '../assets/images/products/product1.webp'
import { useState } from 'react'

// Product card component displaying individual item details

const Amazoncard = ({ img, name, newPrice, oldPrice, emi, addToCart,id }) => {
    // Tracks whether the card is being hovered
    const [hovered, setHovered] = useState(false)
    // Button text (changes between "In Stock" and "Add To Cart")
    const [btnText, setBtnText] = useState("In Stock")
    // Controls fade animation when text changes
    const [changing, setChanging] = useState(false)
    // Handles adding item to cart
    const handleAddToCart = () => {
    addToCart({
      id: id,
      name: name,
      img: img,
      price: newPrice
    })
  }

    const handleMouseEnter = () => {
        setHovered(true)
        setChanging(true)
        setTimeout(() => {
            setBtnText("Add To Cart")
            setChanging(false)
        }, 200)
    }

    const handleMouseLeave = () => {
        setHovered(false)
        setChanging(true)
        setTimeout(() => {
            setBtnText("In Stock")
            setChanging(false)
        }, 200)
    }
    return (
        <div className="amazoncard" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {/* Section label */}
            <div className="cardhead">AMAZING DEALS</div>
            {/* Product image with hover animation */}
            <div className="cardimg">
                <img src={img} alt="product1" className={`${hovered ? 'cardimg_hover' : 'cardimg_leave'}`} />
            </div>
            <div className="imgdesc">
                {/* Product details */}
                <p>{name}</p>
                <p>{newPrice}</p>
                <p>{oldPrice}</p>
            </div>
            <div className="buttons">
                {/* Add to cart button with dynamic text + color */}
                <button className="imgbtn1" onClick={handleAddToCart} style={{ backgroundColor: hovered ? '#e65c2e' : '#7FD07E' }} data-id="1">
                    <span className={`imgbtn1_txt ${changing ? 'change' : ''}`}>{btnText}</span>
                </button>

                <button className="imgbtn2">Buy Now</button>
                <p>or {emi}/Month <span>Buy on EMI</span></p>
            </div>

        </div>
    )
}

export default Amazoncard
