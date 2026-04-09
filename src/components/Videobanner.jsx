import React from 'react'
// Background videos for the section
import bgvideo1 from '../assets/videos/bgvideo1.mp4'
import bgvideo2 from '../assets/videos/bgvideo2.mp4'

// Video banner section showcasing product categories

const Videobanner = () => {
  return (
    <section>
        {/* Container holding both video cards */}
        <div className="autovideo">
            {/* First video card (Custom PC) */}
            <div className="videocard">
                {/* Background video */}
                <video autoPlay muted loop playsInline>
                    <source src={bgvideo1}/>
                </video>
                {/* Overlay text */}
                <div className="videotext">
                    <h1>CUSTOM</h1>
                    <h1>BUILT</h1>
                    <h1>PC</h1>
                    <h2>Starting at ₹49,999</h2>
                </div>
                {/* Action button */}
                <button className="btn">
                    Start Customizing
                </button>
            </div>
            {/* Second video card (Prebuilt PC) */}
            <div className="videocard">
                <video autoPlay muted loop playsInline>
                    <source src={bgvideo2}/>
                </video>
                <div className="videotext">
                    <h1>PREBUILT</h1>
                    <h1>PC</h1>
                </div>
                <button className="btn">
                    Explore
                </button>
            </div>
        </div>
    </section>
  )
}

export default Videobanner
