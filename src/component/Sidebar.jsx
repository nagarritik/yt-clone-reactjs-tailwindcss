import React, { useContext } from 'react'
import sidebarContext from '../context/sidebarContext'

function Sidebar() {
  const isVisible = useContext(sidebarContext)
  return isVisible.isVisible&&(
    <div className='bg-gray-50 flex flex-col w-52 p-3'>
    <span className='font-bold'>Home</span>
    <span className='font-bold'>Short</span>
    <span className='font-bold'>Subscription</span>
    <hr />
    <span className='font-bold'>Library</span>
    </div>
  )
}

export default Sidebar