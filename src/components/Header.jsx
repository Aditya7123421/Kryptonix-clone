import React from 'react'
import mainicon from '../assets/images/icons/mainicon.webp'
import { useState,useEffect } from 'react'

const Header = ({ setPanelOpen }) => {
    const [loginOpen, setLoginOpen] = useState(false)

    const handleLoginClick = (e) => {
        e.stopPropagation()
        setLoginOpen(!loginOpen)
    }
    useEffect(() => {
        const close = () => setLoginOpen(false)
        document.addEventListener('click', close)
        return () => document.removeEventListener('click', close)
    }, [])

    return (
        <header className="uppernav">
            <div className="logo">
                <img src={mainicon} alt="main" />
            </div>
            <ul className="leftmenu">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
            <ul className="rightmenu">
                <li className="searchbar">
                    <input type="text" placeholder="What are you looking for?" />
                    <button>
                        <svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
                        </svg>
                    </button>
                </li>
                <li>Blog</li>
                <li>Career</li>
                <li id="login_hover" onClick={handleLoginClick}>
                    <svg className={loginOpen ? 'orange' : ''} data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z">
                        </path>
                    </svg>
                    <article className="signup_container" id="login" style={{ visibility: loginOpen ? 'visible' : 'hidden' }} onClick={(e) => e.stopPropagation()}>
                        <div className="signup_box">
                            <h3><span>Sign in</span><span className="signup_hover">Create an Account</span></h3>
                            <div className="signup_field">
                                <p>Username or email <span className="red">*</span></p>
                                <input type="text" className="signup_input" placeholder="Username" />
                            </div>
                            <div className="signup_field">
                                <p>Username or email <span className="red">*</span></p>
                                <input type="password" className="signup_input" placeholder="Password" />
                            </div>
                            <div><button>Login</button></div>
                            <div className="signup_hover">Lost Your Password?</div>
                        </div>
                    </article>
                </li>
                <li>
                    <svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z">
                        </path>
                    </svg>
                </li>
                <li id="shopBtn" onClick={() => setPanelOpen(true)}>
                    <svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z">
                        </path>
                    </svg>
                </li>
            </ul>
        </header>
    )
}

export default Header
