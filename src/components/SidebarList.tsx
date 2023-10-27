import SidebarData from './SidebarData'
import { Link } from 'react-router-dom'

const SidebarList: React.FC = () => {
  return (
    <ul className="h-auto w-full p-0 ">
        {SidebarData.map((value, key) => {
            return (
                <Link to={value.link}>
                    <li id={window.location.pathname == value.link ? "active" : ""}
                        className="h-15 w-full bg-blue-900 flex justify-center items-center text-white hover:cursor-pointer hover:bg-blue-800" 
                        key={key} 
                    >
                        <div className="flex grid place-items-center">{value.icon}</div>
                        <div id="title">{value.title}</div>
                    </li>
                </Link>
            )
        })}
    </ul>
  )
}

export default SidebarList