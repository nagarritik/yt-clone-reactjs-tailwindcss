import React from 'react'
import {PiSpinnerThin} from 'react-icons/pi'

function MenuTile({icon,title}) {
  return (
    <div className='w-full px-4 py-2 flex items-center gap-5 hover:bg-gray-100 rounded cursor-pointer'>
        {icon}
        <p className=''>{title}</p>
    </div>
  )
}

MenuTile.defaultProps = {
    title: 'Default Prop 1 Value',
    icon: <PiSpinnerThin color='gray' size={25}/>,
  };

export default MenuTile