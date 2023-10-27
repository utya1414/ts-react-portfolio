import React from 'react'
import SidebarData from './SidebarData'
function SidebarList() {
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
                    <div id="icon">{value.icon}</div>
                    <div id="title">{value.title}</div>
                </li>
            )
        })}
    </ul>
  )
}

export default SidebarList