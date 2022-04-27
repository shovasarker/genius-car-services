import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase/firebase.init'

const Order = () => {
  const [user] = useAuthState(auth)
  const [orders, setOrders] = useState([])
  useEffect(() => {
    axios
      .get(`http://localhost:5000/order?email=${user?.email}`)
      .then((res) => setOrders(res.data))
  }, [user?.email])
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
