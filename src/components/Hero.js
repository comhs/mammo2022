import React from 'react';
import heroImage from '../images/hero.png'

function Hero({ children, phone, darkText }) {
  return (
    <div className="hero">
      {/* <div className="hero-image"><img src="https://www.comhs.org/~/media/Images/Community-Healthcare-Only/Campaigns/CV/Cardiology-Destination/hero.png" alt="Hero" /></div> */}
      <div className="hero-image"><img src={heroImage} alt="Hero" /></div>
      <div className="hero-cta">
        <h1 className={darkText === "true" ? "headline-dark" : "headline"}>{children}</h1>
        <a href={"tel:" + phone.replace(/[^0-9]/g, "")} className="hero-phone">{phone}</a>
        {/* <a href={"tel:" + phone.replace(/[^0-9*]/g, "")} className="hero-phone">{phone}</a> */}
        {/* <div className="hero-button" id="mainBtn">Request&nbsp;an&nbsp;Appointment</div> */}
      </div>
    </div>
  )
}

export default Hero