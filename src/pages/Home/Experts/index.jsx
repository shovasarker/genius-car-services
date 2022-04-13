import React from 'react'
import expert1 from '../../../images/experts/expert-1.jpg'
import expert2 from '../../../images/experts/expert-2.jpg'
import expert3 from '../../../images/experts/expert-3.jpg'
import expert4 from '../../../images/experts/expert-4.jpg'
import expert5 from '../../../images/experts/expert-5.jpg'
import expert6 from '../../../images/experts/expert-6.png'
import Expert from '../Expert'

const experts = [
  { id: 1, name: 'Will Smith', img: expert1 },
  { id: 2, name: 'Chris Rock', img: expert2 },
  { id: 3, name: 'Dwayne Johnson', img: expert3 },
  { id: 4, name: 'Brad Pit', img: expert4 },
  { id: 5, name: 'Jason Statham', img: expert5 },
  { id: 6, name: 'Tom Cruise', img: expert6 },
]

const Experts = () => {
  return (
    <div className='my-5 container' id='experts'>
      <h2 className='text-center'>Our Experts</h2>
      <div className='row mx-auto w-100'>
        {experts?.map((expert) => (
          <Expert key={expert?.id} expert={expert} />
        ))}
      </div>
    </div>
  )
}

export default Experts
