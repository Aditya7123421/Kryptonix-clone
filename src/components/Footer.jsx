import React from 'react'
import call from '../assets/images/icons/call.svg'

const Footer = () => {
  return (
    <footer>
        <div class="ftr_upper">
            <div class="ftr_svgcontainer">
                <div class="ftr_svg">
                    <img src={call} alt="call"/>
                </div>
                <div class="ftr_svgdesc">
                    <div class="ftr_text">
                        Order And Services
                    </div>
                    <div class="ftr_number">(+91) 9818077300</div>
                </div>
            </div>
            <div>
                <div class="ftr_title">Subscribe to our mailing list</div>
                <div class="ftr_text">Ready for something awesome? Join now and get rewarded instantly!</div>
            </div>
            <div class="ftr_textbox">
                <div class="ftr_form">
                    <input type="text" placeholder="Enter email address..."/>
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
        <div class="ftr_mid">
            <div class="ftr_card">
                <div class="ftr_title">Support</div>
                <div>
                    <div class="ftr_text">Sales Inquiry</div>
                    <div class="ftr_number">+91 9818077300</div>
                    <div class="ftr_text">After Sales support</div>
                    <div class="ftr_number">+91 7838652991</div>
                    <div class="ftr_text">WhatsApp</div>
                    <div class="ftr_number">+91 8368276105</div>
                </div>

            </div>
            <div class="ftr_card">
                <div class="ftr_title">Company</div>
                <div>
                    <div class="ftr_text">About Us</div>
                    <div class="ftr_text">Blogs</div>
                    <div class="ftr_text">Careers</div>
                    <div class="ftr_text">FAQS</div>
                </div>
            </div>
            <div class="ftr_card">
                <div class="ftr_title">Quick Links</div>
                <div>
                    <div class="ftr_text">Contact US</div>
                    <div class="ftr_text">Privacy Policy</div>
                    <div class="ftr_text">Terms and Conditions</div>
                    <div class="ftr_text">Return &amp; Shipping Policy</div>
                </div>
            </div>
            <div class="ftr_card">
                <div class="ftr_title">My Account</div>
                <div>
                    <div class="ftr_text">My Account</div>
                    <div class="ftr_text">Track My Order</div>
                    <div class="ftr_text">Wish List</div>
                    <div class="ftr_text">Orders</div>
                </div>
            </div>
            <div class="ftr_card">
                <div class="ftr_title">Address</div>
                <div>
                    <div class="ftr_text">203, Deenar Bhawan 44,
                        Nehru Place, 110019.</div>
                    <div class="ftr_text white">Email</div>
                    <div class="ftr_text orange">support@kryptronix.in</div>

                </div>
            </div>


        </div>
    </footer>
  )
}

export default Footer
