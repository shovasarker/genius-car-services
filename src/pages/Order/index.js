import { signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import axiosPrivate from '../../api/axiosPrivate'
import auth from '../../firebase/firebase.init'

const Order = () => {
  const [user] = useAuthState(auth)
  const [orders, setOrders] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    axiosPrivate
      .get(`https://gcs-server.herokuapp.com/order?email=${user?.email}`)
      .then((res) => setOrders(res.data))
      .catch((error) => {
        console.log(error)
        if (error.response.status === 403 || error.response.status === 401) {
          signOut(auth)
          navigate('/login')
        }
      })
  }, [user, navigate])
  return (
    <div className='d-flex flex-column flex-lg-row'>
      {orders?.map((item) => {
        return (
          <div key={item?._id} className='border rounded shadow m-4 p-4'>
            <h2>{item?.service}</h2>
            <p>{item?.address}</p>
            <p>{item?.phone}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Order
