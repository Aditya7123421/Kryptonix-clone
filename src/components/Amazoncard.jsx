import React from 'react'
import product1 from '../assets/images/products/product1.webp'

const Amazoncard = ({img, name, newPrice, oldPrice,emi}) => {
    return (
        <div className="amazoncard">
            <div className="cardhead">AMAZING DEALS</div>
            <div className="cardimg">
                <img src={img} alt="product1"/>
            </div>
            <div className="imgdesc">
                <p>{name}</p>
                <p>{newPrice}</p>
                <p>{oldPrice}</p>
            </div>
            <div className="buttons">
                <button className="imgbtn1" data-id="1"><span className="imgbtn1_txt">In Stock</span></button>
                <button className="imgbtn2">Buy Now</button>
                <p>or {emi}/Month <span>Buy on EMI</span></p>
            </div>

        </div>
    )
}

export default Amazoncard
