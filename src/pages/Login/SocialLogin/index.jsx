import React, { useEffect } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub, FaFacebookSquare } from 'react-icons/fa'
import { Button } from 'react-bootstrap'
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth'
import auth from '../../../firebase/firebase.init'
import Loading from '../../Shared/Loading'
import { toast } from 'react-toastify'

const SocialLogin = ({ emailError }) => {
  const [signInWithGoogle, googleUser, loading, error] =
    useSignInWithGoogle(auth)
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth)

  useEffect(() => {
    if (googleUser || githubUser) {
      toast.success('SocialLogin is Successful')
    }
  }, [googleUser, githubUser])

  if (loading || githubLoading) {
    return <Loading />
  }

  return (
    <div>
      <div className='d-flex justify-content-center align-items-center mt-2 mx-auto'>
        <div
          style={{ height: '1px', width: '38%' }}
          className='bg-secondary me-2'
        ></div>
        <p className='m-0'>or</p>
        <div
          style={{ height: '1px', width: '38%' }}
          className='bg-secondary ms-2'
        ></div>
      </div>
      <div>
        <p className='text-danger mt-4'>
          {(error || githubError || emailError) &&
            `Error: ${error ? error?.message : ''}${
              githubError ? githubError?.message : ''
            }${emailError ? emailError?.message : ''}`}
        </p>
      </div>
      <div>
        <Button
          type='button'
          className='w-100 d-flex justify-content-center align-items-center mt-3'
          variant='outline-dark'
          onClick={() => signInWithGoogle()}
        >
          <FcGoogle
            className='me-2'
            style={{ height: '22px', width: '22px' }}
          />
          Continue With Google
        </Button>
        <Button
          type='button'
          className='w-100 d-flex justify-content-center align-items-center mt-3'
          variant='dark'
          onClick={() => signInWithGithub()}
        >
          <FaGithub
            className='me-2'
            style={{ height: '20px', width: '20px' }}
          />
          Continue With Github
        </Button>
        <Button
          type='button'
          className='w-100 d-flex justify-content-center align-items-center mt-3'
          style={{ backgroundColor: '#31518d', borderColor: '#31518d' }}
        >
          <FaFacebookSquare
            className='me-2'
            style={{ height: '20px', width: '20px' }}
          />
          Continue With Facebook
        </Button>
      </div>
    </div>
  )
}

export default SocialLogin
