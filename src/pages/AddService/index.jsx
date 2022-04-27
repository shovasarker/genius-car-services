import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AddService = () => {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()
  const onSubmit = (data) => {
    const url = 'https://gcs-server.herokuapp.com/service'
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success('New service has been added')
          navigate('/')
        }
      })
  }

  return (
    <div>
      <h2>Please add a service</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-50 mx-auto d-flex flex-column '
      >
        <input
          placeholder='Name'
          className='px-2 py-1 rounded mt-3 border'
          {...register('name', { required: true, maxLength: 30 })}
        />
        <textarea
          placeholder='Description'
          className='px-2 py-1 rounded mt-3 border'
          {...register('description')}
        />
        <input
          placeholder='Price'
          className='px-2 py-1 rounded mt-3 border'
          type='number'
          {...register('price')}
        />
        <input
          placeholder='Photo URL'
          className='px-2 py-1 rounded mt-3 border'
          type={'text'}
          {...register('img')}
        />
        <input
          className='px-2 py-1 rounded border mt-3'
          type='submit'
          value={'Add Service'}
        />
      </form>
    </div>
  )
}

export default AddService
