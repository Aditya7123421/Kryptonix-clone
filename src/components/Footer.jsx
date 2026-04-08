import React from 'react'
import call from '../assets/images/icons/call.svg'

const Footer = () => {
  return (
    <footer>
        <div className="ftr_upper">
            <div className="ftr_svgcontainer">
                <div className="ftr_svg">
                    <img src={call} alt="call"/>
                </div>
                <div className="ftr_svgdesc">
                    <div className="ftr_text">
                        Order And Services
                    </div>
                    <div className="ftr_number">(+91) 9818077300</div>
                </div>
            </div>
            <div>
                <div className="ftr_title">Subscribe to our mailing list</div>
                <div className="ftr_text">Ready for something awesome? Join now and get rewarded instantly!</div>
            </div>
            <div className="ftr_textbox">
                <div className="ftr_form">
                    <input type="text" placeholder="Enter email address..."/>
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
        <div className="ftr_mid">
            <div className="ftr_card">
                <div className="ftr_title">Support</div>
                <div>
                    <div className="ftr_text">Sales Inquiry</div>
                    <div className="ftr_number">+91 9818077300</div>
                    <div className="ftr_text">After Sales support</div>
                    <div className="ftr_number">+91 7838652991</div>
                    <div className="ftr_text">WhatsApp</div>
                    <div className="ftr_number">+91 8368276105</div>
                </div>

            </div>
            <div className="ftr_card">
                <div className="ftr_title">Company</div>
                <div>
                    <div className="ftr_text">About Us</div>
                    <div className="ftr_text">Blogs</div>
                    <div className="ftr_text">Careers</div>
                    <div className="ftr_text">FAQS</div>
                </div>
            </div>
            <div className="ftr_card">
                <div className="ftr_title">Quick Links</div>
                <div>
                    <div className="ftr_text">Contact US</div>
                    <div className="ftr_text">Privacy Policy</div>
                    <div className="ftr_text">Terms and Conditions</div>
                    <div className="ftr_text">Return &amp; Shipping Policy</div>
                </div>
            </div>
            <div className="ftr_card">
                <div className="ftr_title">My Account</div>
                <div>
                    <div className="ftr_text">My Account</div>
                    <div className="ftr_text">Track My Order</div>
                    <div className="ftr_text">Wish List</div>
                    <div className="ftr_text">Orders</div>
                </div>
            </div>
            <div className="ftr_card">
                <div className="ftr_title">Address</div>
                <div>
                    <div className="ftr_text">203, Deenar Bhawan 44,
                        Nehru Place, 110019.</div>
                    <div className="ftr_text white">Email</div>
                    <div className="ftr_text orange">support@kryptronix.in</div>

                </div>
            </div>


        </div>
    </footer>
  )
}

export default Footer
