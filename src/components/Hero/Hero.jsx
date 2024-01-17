import React from 'react';
import "./Hero.css";
import girl_glasses from "../assets/girl glasses.png"
import hand from '../assets/hand_bg.jpg'
import girl from "../assets/girl.png"

const Hero = () => {
  return (
    <div className='hero'>

      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <p>new</p>
        {/* <img src={hand} alt="" /> */}
        <p>collections</p>
        <p>for everyone</p>
        <button>Latest Collection <i class="fa-solid fa-arrow-right"></i></button>
        <img src="" alt="" />
      </div>

      <div className="hero-right">
        <img src={girl_glasses} alt="" />
      </div>

    </div>
  )
}

export default Hero