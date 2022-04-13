import React from 'react'
import notFound from '../../images/lazy.jpg'
const NotFound = () => {
  return (
    <div style={{ minHeight: '60vh' }}>
      <h2 style={{ textAlign: 'center', marginTop: '20px' }}>
        Mechanic is Sleeping
      </h2>
      <img
        src={notFound}
        alt='404'
        style={{
          width: '300px',
          height: '200px',
          display: 'block',
          margin: '20px auto',
        }}
      />
    </div>
  )
}

export default NotFound
