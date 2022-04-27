import axios from 'axios'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import auth from '../../firebase/firebase.init'
import useServiceDetail from '../../hooks/useServiceDetail'

const Checkout = () => {
  const [user] = useAuthState(auth)
  const { checkoutId } = useParams()
  const [service] = useServiceDetail(checkoutId)
  const navigate = useNavigate()
  const handlePlaceOrder = (e) => {
    e.preventDefault()

    const order = {
      service: service?.name,
      serviceId: service?._id,
      email: user?.email,
      address: e.target.address.value,
      phone: e.target.phone.value,
    }

    axios.post('http://localhost:5000/order', order).then((res) => {
      const { data } = res
      if (data?.insertedId) {
        toast('Your Order is Booked!!!')
        e.target.reset()
        navigate('/orders')
      }
    })
  }

  return (
    <div className='w-50 mx-auto'>
      <h2>Checkout For Service name: {service?.name}</h2>
      <form onSubmit={handlePlaceOrder}>
        <input
          type='text'
          name='name'
          placeholder='Name'
          value={user?.displayName}
          required
          readOnly
          disabled
          className='w-100 px-2 py-1 rounded-2 border mt-4'
        />
        <br />
        <input
          type='email'
          name='email'
          value={user?.email}
          readOnly
          disabled
          placeholder='Email'
          required
          className='w-100 px-2 py-1 rounded-2 border mt-3'
        />
        <br />
        <input
          type='text'
          name='serviceName'
          value={service?.name}
          required
          readOnly
          disabled
          placeholder='Service Name'
          className='w-100 px-2 py-1 rounded-2 border mt-3'
        />
        <br />
        <input
          type='text'
          name='address'
          placeholder='Address'
          required
          className='w-100 px-2 py-1 rounded-2 border mt-3'
        />
        <br />
        <input
          type='number'
          name='phone'
          placeholder='Phone Number'
          required
          className='w-100 px-2 py-1 rounded-2 border mt-3'
        />
        <br />
        <input
          type='submit'
          value='Place Order'
          className='btn btn-primary mt-4 w-100'
        />
      </form>
    </div>
  )
}

export default Checkout
