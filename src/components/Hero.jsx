import React from 'react'

// Hero section: main landing area with title and CTA button

const Hero = () => {
  return (
    <main className="mainhead">
        {/* Text content (welcome + main heading + tagline) */}
        <div className="txt">
            <div className="otherline">
                <h1>Welcome to </h1>
            </div>
            {/* Main highlighted title */}
            <div className="mainline">
                <h1>
                    Kyptronix <span>Gaming </span>
                </h1>
            </div>
            <div className="otherline">
                <h1>Build Your Own PC</h1>
            </div>
        </div>
        {/* Call-to-action button */}
        <button className="btn">
            <h1>
                BUILD YOURS NOW </h1>
        </button>
    </main>
  )
}

export default Hero
