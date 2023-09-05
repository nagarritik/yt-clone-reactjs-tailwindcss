import { useSelector } from "react-redux"
import MenuTile from "./MenuTile"
import {MdHomeFilled,MdOutlineSubscriptions,MdOutlineVideoLibrary} from 'react-icons/md'
import {BsPlayCircle} from 'react-icons/bs'
import {GoHistory} from 'react-icons/go'

function Sidebar() {
  const isMenuEnabled = useSelector(store=>store.appConfig.isMenuEnabled)
  return isMenuEnabled&&(
    <div className="shadow w-[240px] px-3 gap-2 flex flex-col pt-[10px]">
      <MenuTile icon={<MdHomeFilled size={25} color="gray"/>} title={"Home"}/>
      <MenuTile icon={<BsPlayCircle size={25} color="gray"/>} title={"Shorts"}/>
      <MenuTile icon={<MdOutlineSubscriptions size={25} color="gray"/>} title={"Subscription"}/>
      <hr />
      <MenuTile title={"Library"} icon={<MdOutlineVideoLibrary size={25} color="gray"/>}/>
      <MenuTile title={"History"} icon={<GoHistory size={25} color="gray"/>}/>
      <MenuTile title={"Your videos"}/>
      <MenuTile title={"Watch Later"}/>
      <MenuTile title={"Your clips"}/>
      <MenuTile title={"Show more"}/>
      <hr />
      <MenuTile/>
    </div>
  )
}

export default Sidebar