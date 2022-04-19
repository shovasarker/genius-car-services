import React, { useEffect, useRef } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import auth from '../../../firebase/firebase.init'
import Loading from '../../Shared/Loading'
import PageTitle from '../../Shared/PageTitle'
import SocialLogin from '../SocialLogin'

const Login = () => {
  const emailRef = useRef('')
  const passwordRef = useRef('')
  const navigate = useNavigate()
  const [signInWithEmailAndPassword, emailUser, loading, error] =
    useSignInWithEmailAndPassword(auth)

  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth)
  const [user] = useAuthState(auth)

  const location = useLocation()
  const from = location?.state?.from?.pathname || '/'
  useEffect(() => {
    if (user || emailUser) navigate(from, { replace: true })
  }, [user, emailUser, navigate, from])

  if (loading) {
    return <Loading />
  }

  const handleLogin = (e) => {
    e.preventDefault()
    const email = emailRef.current.value
    const password = passwordRef.current.value

    if (!email || !password) return

    signInWithEmailAndPassword(email, password)
  }

  const handleResetPassword = async () => {
    const email = emailRef.current.value
    if (email) {
      await sendPasswordResetEmail(email)
      toast('Password Reset Email Sent.')
      return
    }

    toast('Please! Enter your email address first.')
  }

  return (
    <Container>
      <PageTitle title='Login' />
      <div className='mx-auto border my-4 px-2 py-4' style={{ width: '340px' }}>
        <h2 className='text-center'>Login</h2>
        <Form onSubmit={handleLogin}>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailRef}
              type='email'
              placeholder='Enter email'
              required
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passwordRef}
              type='password'
              placeholder='Password'
              required
            />
          </Form.Group>
          <Button className='w-100' variant='primary' type='submit'>
            Login
          </Button>
        </Form>
        <div className='mt-4 d-flex flex-row justify-content-center align-items-center gx-1'>
          New to Genius car ?{' '}
          <Button
            variant='link'
            className='text-primary p-0 text-decoration-none ms-1'
            onClick={() => navigate('/register')}
          >
            Please Register
          </Button>
        </div>
        <div className='mt-2 d-flex flex-row justify-content-center align-items-center gx-1'>
          Forget Password ?{' '}
          <Button
            variant='link'
            className='text-primary p-0 text-decoration-none ms-1'
            onClick={handleResetPassword}
          >
            Reset Password
          </Button>
        </div>
        <SocialLogin emailError={error} />
        <ToastContainer position='top-center' />
      </div>
    </Container>
  )
}

export default Login
