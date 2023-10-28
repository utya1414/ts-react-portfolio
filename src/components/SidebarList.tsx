import SidebarData from './SidebarData'
import { Link } from 'react-router-dom'
import { tv } from 'tailwind-variants'

const setActive = tv({
    base: "h-14 w-full flex justify-center items-center text-white hover:cursor-pointer hover:bg-blue-800 transition",
    variants: {
        isActive: {
            "active": 'bg-blue-800',
            "inactive": 'bg-blue-900',
        },
    },
});

const SidebarList: React.FC = () => {
  return (
    <ul className="h-auto w-full p-0 ">
        {SidebarData.map((value, key) => {
            return (
                <Link to={value.link}>
                    <li 
                        className={setActive({isActive: value.link == window.location.pathname ? "active" : "inactive"})}
                        key={key}
                    >
                        <div className="basis-1/3 grid place-items-center">{value.icon}</div>
                        <div className="basis-2/3">{value.title}</div>
                    </li>
                </Link>
            )
        })}
    </ul>
  )
}

export default SidebarList