import React from 'react'
import truck from '../assets/images/icons/truck.svg'
import camera from '../assets/images/icons/camera.svg'
import creditcard from '../assets/images/icons/creditcard.svg'
import folder from '../assets/images/icons/folder.svg'
import cash from '../assets/images/icons/cash.svg'

const Banner = () => {
  return (
    <div className="bottomhead">
        <div className="svgcard">
            <div className="svghead">
                <img src={truck} alt="truck"/>
            </div>
            <div className="svgtext">
                <h3>PAN India Shipping</h3>
                <p>Delivery on every order accross India</p>
            </div>
        </div>
        <div className="svgcard">
            <div className="svghead">
                <img src={creditcard} alt="creditcard"/>
            </div>
            <div className="svgtext">
                <h3>EMI Option Available</h3>
                <p>Shop Now, Pay Later With Card EMI.</p>
            </div>
        </div>
        <div className="svgcard">
            <div className="svghead">
                <img src={camera} alt="camera"/>
            </div>
            <div className="svgtext">
                <h3>Live PC Builds</h3>
                <p>Lifetime Technichal Support.</p>
            </div>
        </div>
        <div className="svgcard">
            <div className="svghead">
                <img src={folder} alt="folder"/>

            </div>
            <div className="svgtext">
                <h3>Buissnesses Can Reclaim GST</h3>
                <p>Call Us For Expert Quote Guidance.</p>
            </div>
        </div>
        <div className="svgcard">
            <div className="svghead">
                <img src={cash} alt="cash"/>
            </div>
            <div className="svgtext">
                <h3>Cash On Delivery</h3>
                <p>Order Now, Pay Later When It Arrives.</p>
            </div>
        </div>

    </div>
  )
}

export default Banner
