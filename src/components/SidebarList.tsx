import SidebarData from './SidebarData'
import { Link } from 'react-router-dom'

const SidebarList: React.FC = () => {
  return (
    <ul className="SidebarList">
        {SidebarData.map((value, key) => {
            return (
                <li id={window.location.pathname == value.link ? "active" : ""}
                    className="row" 
                    key={key} 
                    onClick={() => {
                    window.location.pathname = value.link
                }}>
                    <Link to={value.link}>
                        <div id="icon">{value.icon}</div>
                        <div id="title">{value.title}</div>
                    </Link>
                </li>
            )
        })}
    </ul>
  )
}

export default SidebarList