import React from 'react'
import bg1 from '../assets/images/backgrounds/blackbg1.webp'
import bg2 from '../assets/images/backgrounds/blackbg2.webp'
import bg3 from '../assets/images/backgrounds/blackbg3.webp'
import mouse from '../assets/images/products/mouse.webp'
import gamingchair from '../assets/images/products/gamingchair.webp'
import headphones from '../assets/images/products/headphones.webp'

const Images = () => {
  return (
    <section className="images">
        <div className="subtitle">
            PRE BUILD <span>PC</span>
        </div>
        <div className="sectionimg">
            <div className="imgcard">
                <img src={bg1} alt="bg1" className="bigimg"/>
                <img src={mouse} alt="mouse" className="topimg"/>
                <div className="desctext">
                    <h3>Fast Performance</h3>
                    <div className="inside_desctext">
                        <h1>GAMING PC</h1>
                        <h2>Starting ₹59999</h2>
                    </div>
                </div>
                <button className="btn2">Shop Now</button>
            </div>
            <div className="imgcard">
                <img src={bg2} alt="bg2" className="bigimg"/>
                <img src={gamingchair} alt="chair" className="topimg"/>
                <div className="desctext mid">
                    <h3>CREATIVE POWER</h3>
                    <div className="inside_desctext">
                        <h1>CONTENT </h1>
                        <h1>CREATION PC</h1>
                        <h2>Starting ₹59999</h2>
                    </div>
                </div>
                <button className="btn2">Shop Now</button>
            </div>
            <div className="imgcard">
                <img src={bg3} alt="bg3" className="bigimg"/>
                <img src={headphones} alt="headphones" className="topimg"/>
                <div className="desctext">
                    <h3>EFFORTLESS WORK</h3>
                    <div className="inside_desctext">
                        <h1>WORKSTATION</h1>
                        <h1>PC</h1>
                        <h2>Starting ₹69999</h2>
                    </div>
                </div>
                <button className="btn2">Shop Now</button>
            </div>
        </div>
    </section>
  )
}

export default Images
