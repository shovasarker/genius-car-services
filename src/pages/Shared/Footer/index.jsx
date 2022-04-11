import React from 'react'

const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <footer className='bg-dark mt-5 pt-5' style={{ height: '10rem' }}>
      <p className='text-center text-light'>Copyright &copy; {date}.</p>
    </footer>
  )
}

export default Footer
