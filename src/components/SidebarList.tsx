import SidebarData from './SidebarData'
import { Link } from 'react-router-dom'

const SidebarList: React.FC = () => {
  return (
    <ul className="SidebarList">
        {SidebarData.map((value, key) => {
            return (
                <Link to={value.link}>
                    <li id={window.location.pathname == value.link ? "active" : ""}
                        className="row" 
                        key={key} 
                    >
                        <div id="icon">{value.icon}</div>
                        <div id="title">{value.title}</div>
                    </li>
                </Link>
            )
        })}
    </ul>
  )
}

export default SidebarList