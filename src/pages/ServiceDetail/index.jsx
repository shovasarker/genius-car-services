import React from 'react'
import { useParams } from 'react-router-dom'
import PageTitle from '../Shared/PageTitle'

const ServiceDetail = () => {
  const { serviceId } = useParams()
  return (
    <div className=''>
      <PageTitle title='Service' />
      <h2>Welcome to Details of Serivce Id : {serviceId}</h2>
    </div>
  )
}

export default ServiceDetail
