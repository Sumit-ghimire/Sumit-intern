import React from 'react'
import myPhoto from '../assets/bestphotos.jpeg' 

const Image = () => {
  return (
    <div className='flex justify-center my-10'>
      <img 
        src={myPhoto}  
        alt="My photo" 
        className='w-64 h-64 object-cover rounded-2xl shadow-xl border-4 border-white'
      />
    </div>
  )
}

export default Image