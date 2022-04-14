import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router-dom'
import auth from '../../../firebase/firebase.init'
import Loading from '../Loading'
import 'react-toastify/dist/ReactToastify.css'

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth)
  const location = useLocation()

  if (loading) {
    return <Loading />
  }

  if (!user)
    return <Navigate replace to={'/login'} state={{ from: location }} />

  return children
}

export default RequireAuth
