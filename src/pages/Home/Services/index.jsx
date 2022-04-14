import React, { useEffect, useState } from 'react'
import Service from '../Service'

import './services.css'

const Services = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    const getServices = async () => {
      const res = await fetch('./services.json')
      const data = await res.json()
      setServices(data)
    }

    getServices()
  }, [])

  return (
    <div id='services' className='container'>
      <h1 className='services-title'>Our Services</h1>

      <div className='services-container'>
        {services?.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  )
}

export default Services
