import React from 'react'
import { Avatar } from "@material-ui/core";
import "./SidebarChat.css"

function SidebarChat() {
    return (
        <div className="sidebar-chat">
            <Avatar/>
            <div className="sidebar-chat-info">
                <h2>Room name</h2>
                <p>This is the last chat..</p>
            </div>
        </div>
    )
}

export default SidebarChat
