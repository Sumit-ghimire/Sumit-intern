import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center px-8 py-4 bg-white border-b border-gray-200'>
  <div>
    <p className='text-gray-900 text-xl font-semibold' >Logo</p>
  </div>
  <div>
    <ul className='flex items-center gap-10 text-gray-600'>
      <li className='hover:text-black font-medium cursor-pointer'>Home</li>
      <li className='hover:text-black font-medium cursor-pointer'>About</li>
      <li className='hover:text-black font-medium cursor-pointer'>Contact</li>
    </ul>
  </div>
</div>
  )
}

export default Header;

