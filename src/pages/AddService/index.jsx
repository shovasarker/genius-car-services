import React from 'react'
import { useForm } from 'react-hook-form'

const AddService = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    console.log(data)
    const url = 'http://localhost:5000/service'
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
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
          className='mt-3'
          {...register('name', { required: true, maxLength: 20 })}
        />
        <textarea
          placeholder='Description'
          className='mt-3'
          {...register('description')}
        />
        <input
          placeholder='Price'
          className='mt-3'
          type='number'
          {...register('price')}
        />
        <input
          placeholder='Photo URL'
          className='mt-3'
          type={'text'}
          {...register('img')}
        />
        <input className='mt-3' type='submit' value={'Add Service'} />
      </form>
    </div>
  )
}

export default AddService
