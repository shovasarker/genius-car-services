import React from 'react'
import {
  useAuthState,
  useSendEmailVerification,
} from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router-dom'
import auth from '../../../firebase/firebase.init'
import Loading from '../Loading'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-bootstrap'

import 'react-toastify/dist/ReactToastify.css'

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth)
  const location = useLocation()
  const [sendEmailVerification] = useSendEmailVerification(auth)

  if (loading) {
    return <Loading />
  }

  if (!user)
    return <Navigate replace to={'/login'} state={{ from: location }} />

  if (!user?.emailVerified) {
    return (
      <div className='text-center mt-5'>
        <h4>Email is Not Verified</h4>
        <p>Please Verfified Your Email</p>
        <button
          className='btn btn-primary'
          onClick={async () => {
            console.log('clicked')
            await sendEmailVerification()
            toast('Sent email')
          }}
        >
          Send Verification Email Again
        </button>
        <ToastContainer />
      </div>
    )
  }

  return children
}

export default RequireAuth
