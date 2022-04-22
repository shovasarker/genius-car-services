import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PageTitle from '../Shared/PageTitle'

const ServiceDetail = () => {
  const { serviceId } = useParams()
  const [service, setService] = useState({})
  useEffect(() => {
    const url = `http://localhost:5000/service/${serviceId}`
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data))
  })

  return (
    <div className=''>
      <PageTitle title='Service' />
      <h2>Welcome to Details of Serivce name : {service?.name}</h2>
    </div>
  )
}

export default ServiceDetail
