import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import useServiceDetail from '../../hooks/useServiceDetail'
import PageTitle from '../Shared/PageTitle'

const ServiceDetail = () => {
  const { serviceId } = useParams()
  const navigate = useNavigate()
  const [service] = useServiceDetail(serviceId)

  return (
    <div className=''>
      <PageTitle title='Service' />
      <h2>Welcome to Details of Serivce name : {service?.name}</h2>
      <Button
        variant='primary'
        onClick={() => navigate(`/checkout/${serviceId}`)}
      >
        Proceed to Checkout
      </Button>
    </div>
  )
}

export default ServiceDetail
