import React, { useRef, useState } from 'react'
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from 'react-firebase-hooks/auth'
import { Button, Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import auth from '../../../firebase/firebase.init.js'
import SocialLogin from '../SocialLogin'
import Loading from '../../Shared/Loading/index.jsx'
import PageTitle from '../../Shared/PageTitle/index.jsx'

const Register = () => {
  const [agree, setAgree] = useState(false)
  const nameRef = useRef('')
  const emailRef = useRef('')
  const passwordRef = useRef('')
  const navigate = useNavigate()

  const [createUserWithEmailAndPAssword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })

  const [updateProfile] = useUpdateProfile(auth)

  if (user) {
    console.log(user?.user)
    navigate('/')
  }

  if (loading) {
    return <Loading />
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    e.preventDefault()
    const displayName = nameRef.current.value
    const email = emailRef.current.value
    const password = passwordRef.current.value

    if (!email || !password) return
    await createUserWithEmailAndPAssword(email, password)
    await updateProfile({ displayName })
    console.log('profile updated')
  }

  return (
    <Container>
      <PageTitle title='Register' />
      <div
        className=' mx-auto border my-4 px-2 py-4'
        style={{ width: '340px' }}
      >
        <h2 className='text-center'>Register</h2>
        <Form onSubmit={handleRegister}>
          <Form.Group className='mb-3' controlId='formBasicName'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              ref={nameRef}
              type='text'
              placeholder='Enter Name'
              required
            />
          </Form.Group>
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
          <Form.Group className='mb-3' controlId='formBasicCheckbox'>
            <Form.Check
              type='checkbox'
              checked={agree}
              onChange={() => setAgree(!agree)}
              label='Accept Genius Car Terms and Conditions'
              className={`${!agree && 'text-danger'}`}
            />
          </Form.Group>
          <Button
            className='w-100'
            variant='primary'
            type='submit'
            disabled={!agree}
          >
            Register
          </Button>
        </Form>
        <div className='mt-4 d-flex flex-row justify-content-center align-items-center gx-1'>
          Already have an account ?{' '}
          <Button
            variant='link'
            className='text-primary p-0 text-decoration-none ms-1'
            onClick={() => navigate('/login')}
          >
            Please Login
          </Button>
        </div>
        <SocialLogin emailError={error} />
      </div>
    </Container>
  )
}

export default Register
