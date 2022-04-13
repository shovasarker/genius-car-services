import React from 'react'
import { useParams } from 'react-router-dom'

const ServiceDetail = () => {
  const { serviceId } = useParams()
  return (
    <div className=''>
      <h2>Welcome to Details of Serivce Id : {serviceId}</h2>
    </div>
  )
}

export default ServiceDetail
