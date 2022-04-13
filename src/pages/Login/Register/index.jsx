import React, { useRef } from 'react'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { Button, Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import auth from '../../../firebase/firebase.init.js'

const Register = () => {
  const nameRef = useRef('')
  const emailRef = useRef('')
  const passwordRef = useRef('')
  const navigate = useNavigate()

  const [createUserWithEmailAndPAssword, user] =
    useCreateUserWithEmailAndPassword(auth)

  // const [updateProfle] = useUpdateProfile(auth)

  if (user) {
    // updateProfle({ displayName: nameRef.current.value })
    navigate('/home')
  }

  const handleRegister = (e) => {
    e.preventDefault()
    e.preventDefault()
    const email = emailRef.current.value
    const password = passwordRef.current.value

    if (!email || !password) return
    createUserWithEmailAndPAssword(email, password)
  }

  return (
    <Container>
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
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
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
            <Form.Check type='checkbox' label='Check me out' />
          </Form.Group>
          <Button className='w-full' variant='primary' type='submit'>
            Register
          </Button>
        </Form>
        <div className='mt-4 d-flex flex-row align-items-center gx-1'>
          Already have an account ?{' '}
          <Button
            variant='link'
            className='text-warning p-0 text-decoration-none ms-1'
            onClick={() => navigate('/login')}
          >
            Please Login
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default Register
