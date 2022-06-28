import React from 'react'

const BodyPanel = ({ headline, children }) => {
  return (
    <section className="main-content">
      <h2 className="xl-heading">{headline}</h2>
      <p>{children}</p>
    </section>
  )
}

export default BodyPanel