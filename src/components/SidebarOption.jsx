import React from 'react'
import '../styles/components/SidebarOption.css'

export const SidebarOption = ({active, text, Icon}) => {
    return (
        <div className={`sidebarOption ${active ? 'sidebarOption--active': ''}`}>
            <Icon />
            <h2>{text}</h2>
        </div>
    )
}
