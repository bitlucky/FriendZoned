import React from 'react'
import "./SideBarOption.css"

function SideBarOption({Icon , title }) {
    return (
        <div className= "sideBarOption">
            {Icon && <Icon className= "sidebaroption__icon"/>}
            {Icon ? ( <h3> {title} </h3> ) :(<h3> <span className = "sidebarOption__hash"> # {title} </span>  </h3> ) }
            
        </div>
    )
}

export default SideBarOption
