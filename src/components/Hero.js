import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';
const json = require('../api/images.json');

function Hero({ children, phone, darkText, ctaButton }) {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((imgIndex + 1) % json.images.length);
    }, 5000);
    return () => clearInterval(interval);
  })

  return (
    <div className="hero">
      <div className="hero-image">
        <img key={json.images[imgIndex].key} src={json.images[imgIndex].url} alt={json.images[imgIndex].alt} />
      </div>
      <div className="hero-cta">
        <h1 className={darkText === "true" ? "headline-dark" : "headline"}>{children}</h1>
        <a href={"tel:" + phone.replace(/[^0-9]/g, "")} className="hero-phone">{phone.replace(/\s/, '\u00A0').replace(/-/,'\u2011')}.</a>
        {
          ctaButton === "true" ?
            <div className="hero-button" id="mainBtn">Request&nbsp;an&nbsp;Appointment</div> :
            null
        }
      </div>
    </div>
  )
}

export default Hero