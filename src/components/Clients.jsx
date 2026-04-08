import React from 'react'
import client1 from '../assets/images/banners/clients1.webp'
import client2 from '../assets/images/banners/clients2.webp'
import client3 from '../assets/images/banners/clients3.webp'
import client4 from '../assets/images/banners/clients4.webp'
import client5 from '../assets/images/banners/clients5.webp'

const Clients = () => {
  return (
    <article className="clients">
        <div className="clients_title">
            <div className="orange">Some of our</div> Popular Clients
        </div>
        <div className="clients_images">
            <img src={client1} alt="clients1"/>
            <img src={client2} alt="clients2"/>
            <img src={client3} alt="clients3"/>
            <img src={client4} alt="clients4"/>
            <img src={client5} alt="clients5"/>
        </div>
    </article>
  )
}

export default Clients
