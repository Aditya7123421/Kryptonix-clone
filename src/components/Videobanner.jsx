import React from 'react'
import bgvideo1 from '../assets/videos/bgvideo1.mp4'
import bgvideo2 from '../assets/videos/bgvideo2.mp4'

const Videobanner = () => {
  return (
    <section>
        <div className="autovideo">
            <div className="videocard">
                <video autoPlay muted loop playsInline>
                    <source src={bgvideo1}/>
                </video>
                <div className="videotext">
                    <h1>CUSTOM</h1>
                    <h1>BUILT</h1>
                    <h1>PC</h1>
                    <h2>Starting at ₹49,999</h2>
                </div>
                <button className="btn">
                    Start Customizing
                </button>
            </div>
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
