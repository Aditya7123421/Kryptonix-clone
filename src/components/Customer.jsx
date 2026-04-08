import React from 'react'
import google from '../assets/images/icons/google_icon.svg'
import icon1 from '../assets/images/icons/review_icon1.png'
import icon2 from '../assets/images/icons/review_icon2.png'
import icon3 from '../assets/images/icons/review_icon3.png'
import icon4 from '../assets/images/icons/review_icon4.png'


const Customer = () => {
  return (
    <section className="customer-review">
        <div className="customer-review_title">
            <h1><span className="orange">CUSTOMER</span> REVIEW</h1>
            <h3>
                <span className="orange">4.8</span>
                <span className="star"> ★★★★★</span>
                <span className="black"> View all 200+ Reviews</span>
            </h3>
        </div>
        <div className="customer-review_grid">
            <div className="customer-review_card">
                <div className="customer-review_card_google">
                    <img src={google} alt="google_icon"/>
                </div>
                <div className="customer-review_card_title">
                    <div className="customer-review_card_icon">
                        <img src={icon1} alt="review_icon1"/>
                    </div>
                    <div className="customer-review_card_heading">
                        <p className="blue">Kunal Kewat</p>
                        <p className="gray">10 months ago</p>
                    </div>
                </div>
                <div className="star">★★★★★</div>
                <div className="customer-review_card-summary">Best</div>
            </div>
            <div className="customer-review_card">
                <div className="customer-review_card_google">
                    <img src={google} alt="google_icon"/>
                </div>
                <div className="customer-review_card_title">
                    <div className="customer-review_card_icon">
                        <img src={icon2} alt="review_icon2"/>
                    </div>
                    <div className="customer-review_card_heading">
                        <p className="blue">Kiran Gubbala</p>
                        <p className="gray">10 months ago</p>
                    </div>
                </div>
                <div className="star">★★★★★</div>
                <div className="customer-review_card-summary">Great service. One stop solution if you are building your new
                    PC. These guys really help you from start to end. They literally help you in every stage starting
                    from choosing the best as per your budget to claiming the warranty in case of any mishap.</div>
            </div>
            <div className="customer-review_card">
                <div className="customer-review_card_google">
                    <img src={google} alt="google_icon"/>
                </div>
                <div className="customer-review_card_title">
                    <div className="customer-review_card_icon">
                        <img src={icon3} alt="review_icon3"/>
                    </div>
                    <div className="customer-review_card_heading">
                        <p className="blue">Subhajit Chakraborty</p>
                        <p className="gray">10 months ago</p>
                    </div>
                </div>
                <div className="star">★★★★★</div>
                <div className="customer-review_card-summary">Initially, I was skeptical of buying from an online site, that
                    too from a shop in Delhi (I stay in Kolkata). However, decided to bite the bullet, and advance
                    booked my custom rig from them on the 3rd of March. I bought a 2.6L system composed of Ryzen 9 7900X
                    CPU, Zotac RTX 5080 Solid OC GPU, Gigabyte Aorus x670 Motherboard, 2x16GB GSkill Trident Z5 Neo RGB
                    RAM, Superflower Leadex 1000W PSU, Corsair H150 360MM AIO Liquid Cooler, and Ant Esports X7 cabinet.

                    They prepared the rig by 7th of March and shipped it on the same date after testing the system and
                    sending me the videos and screenshots of their tests. It arrived perfectly 2 days later on the 10th
                    of March. Everything came assembled except for the 5080, which I installed after talking to their
                    technician. Now, after using it for 1 month, I can safely say it was a great decision to invest in
                    this system and buying it from them. It runs everything including any and all games flawlessly.
                    Thanks Kryptronix Gaming.

                    However, they need to work on their communication a bit as they went silent after advance booking
                    and didn't update me much on what was happening with my system between 3rd and 7th. I had to contact
                    them everytime, albeit they responded immediately.</div>
            </div>
            <div className="customer-review_card">
                <div className="customer-review_card_google">
                    <img src={google} alt="google_icon"/>
                </div>
                <div className="customer-review_card_title">
                    <div className="customer-review_card_icon">
                        <img src={icon4} alt="review_icon4"/>
                    </div>
                    <div className="customer-review_card_heading">
                        <p className="blue">Isak Khatua</p>
                        <p className="gray">10 months ago</p>
                    </div>
                </div>
                <div className="star">★★★★★</div>
                <div className="customer-review_card-summary">Best experience...you can trust these guys</div>
            </div>
        </div>
    </section>
  )
}

export default Customer
