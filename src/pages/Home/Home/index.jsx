import React from 'react'
import Banner from '../Banner'
import Experts from '../Experts'
import Services from '../Services'

const Home = () => {
  return (
    <>
      <Banner />
      <div className='container'>
        <Services />
        <Experts />
      </div>
    </>
  )
}

export default Home
