import React from 'react'
import './service.css'

const Service = ({ service }) => {
  const { name, description, img, price } = service
  return (
    <div className='service-card'>
      <img src={img} alt={name} className='service-img' />
      <div className='service-details'>
        <h2 className='service-title'>{name}</h2>
        <p className='service-price'>
          Price: <span>${price}</span>
        </p>
        <p className='service-description'>{description}</p>
        <button className='service-btn'>Book {name}</button>
      </div>
    </div>
  )
}

export default Service
