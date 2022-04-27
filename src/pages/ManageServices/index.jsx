import React from 'react'
import useServices from '../../hooks/useServices'

const ManageServices = () => {
  const [services, setServices] = useServices()
  const handleDelete = (id) => {
    const proceed = window.confirm(
      'Are you Sure ? You want to delete the Service ?'
    )
    if (proceed) {
      fetch(`https://gcs-server.herokuapp.com/service/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            setServices(services?.filter((service) => service?._id !== id))
          }
        })
    }
  }
  return (
    <div>
      <h2>Manage Your Services</h2>
      {services?.map((service) => (
        <div key={service?._id}>
          <h5>
            {service?.name}{' '}
            <button onClick={() => handleDelete(service?._id)}>X</button>
          </h5>
        </div>
      ))}
    </div>
  )
}

export default ManageServices
