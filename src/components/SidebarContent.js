import React from 'react'

function SidebarContent(props) {

    return (
        <a className="sidebar-content" href={props.toRe}>
            {props.renderIcon}
            <span className="sidebar-content-name">{props.content}</span>
        </a>)
}
export default SidebarContent;