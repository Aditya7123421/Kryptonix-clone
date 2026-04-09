import React from 'react'
// Top section of the blue product area (offer + timer + image)
const Blueupper = () => {
  return (
    <div className="blue_upper">
      {/* Left side: promotional text + countdown */}
            <div className="text">
              {/* Main offer heading */}
                <div className="uppertxt">
                    <h1>LIMITED</h1>
                    <h1>TIME DISCOUNTS</h1>
                    <h2>UP TO 50% OFF</h2>
                    <h3>TRUSTED BY THE PROS. BUILT FOR WINNERS</h3>
                </div>
              {/* Countdown timer display (currently static values) */}
                <div className="lowertxt">
                    <p>Time is Running Out:</p>
                    <div className="timerdisp">
                        <div>
                            <h4>00</h4>
                            <h5>DAYS</h5>
                        </div>
                        <div>
                            <h4>00</h4>
                            <h5>HOURS</h5>
                        </div>
                        <div>
                            <h4>00</h4>
                            <h5>MINS</h5>
                        </div>
                        <div>
                            <h4>00</h4>
                            <h5>SEC</h5>
                        </div>
                    </div>
                </div>
            </div>
      {/* Right side: large promotional image */}
            <div className="verybigimg">
                <img src="https://kryptronix.in/wp-content/uploads/2025/06/Cpu-case.webp" alt=""/>
            </div>
        </div>
  )
}

export default Blueupper
