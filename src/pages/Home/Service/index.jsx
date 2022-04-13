import React from 'react'
import { useNavigate } from 'react-router-dom'
import './service.css'

const Service = ({ service }) => {
  const { id, name, description, img, price } = service
  const navigate = useNavigate()
  return (
    <div className='service-card'>
      <img src={img} alt={name} className='service-img' />
      <div className='service-details'>
        <h2 className='service-title'>{name}</h2>
        <p className='service-price'>
          Price: <span>${price}</span>
        </p>
        <p className='service-description'>{description}</p>
        <button
          onClick={() => navigate(`/service/${id}`)}
          className='service-btn'
        >
          Book {name}
        </button>
      </div>
    </div>
  )
}

export default Service
