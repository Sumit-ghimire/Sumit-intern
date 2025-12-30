import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className='bg-purple-600 text-sky-50 hover:bg-purple-500 rounded-lg my-4 py-2 px-8'>{props.click}</button>
    </div>
  )
}

export default Button