import React from 'react'
import Button from './Button'

const Form = () => {
  return (
    <div className='flex flex-col text-center p-10 bg-white shadow-xl border-t-4 border-blue-600 my-16 rounded-xl max-w-md mx-auto gap-6'>
      <h1>
        Login
      </h1>
      <input type='text' placeholder='Name' id='name' className='border border-purple-300 focus:border-purple-500 outline-none my-2 rounded-lg py-2 px-4'></input>
<input type='password' placeholder='Password' id='password' className='border border-purple-300 focus:border-purple-500 outline-none rounded-lg py-2 px-4'></input>
      <Button click="LogIn"></Button>
    </div>
  )
}

export default Form