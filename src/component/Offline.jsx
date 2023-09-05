import React from 'react'

function Offline() {
  return (
    <div className='gap-3 bg-red-500 h-screen flex justify-center items-center flex-col'>
      <h1 className='font-bold text-red-500 bg-white px-3 rounded text-3xl'>404</h1>
      <p className='text-white text-3xl font-medium'>Connect to the internet</p>
      <span className='text-white'>You're offline. Check your connection.</span>
      <button className='border border-white rounded-full px-5 py-1 text-white'>Retry</button>
    </div>
  )
}

export default Offline