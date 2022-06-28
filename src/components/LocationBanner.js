import React from 'react'
const json = require('../api/locations.json');

const LocationBanner = ({ children }) => {
  return (
    <div className="location-banner">
      <h3>{children}</h3>
      <div>
        {json.locations.map(card => (
          <div className="location">
            <h4>{card.title}</h4>
            <p>{card.address}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LocationBanner