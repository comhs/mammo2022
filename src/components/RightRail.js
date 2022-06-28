import React from 'react'
import UnorderedList from './UnorderedList'

const RightRail = () => {
  return (
    <section className="main-risks">
      <p className="risk-factors">See a cardiologist soon if you have these risk factors:</p>
      <UnorderedList />
      <p className="emergency-disclaimer"><strong>Call 9-1-1 immediately if you are experiencing any medical emergency.</strong></p>
    </section>
  )
}

export default RightRail