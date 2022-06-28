import React from 'react'

const Location = ({ title, addr }) => {
  return (
    <div>
      <h4>{title}</h4>
      <p>{addr}</p>
    </div>
  )
}

export default Location