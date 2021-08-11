import React from 'react'
import "./Chat.css"
import { Avatar,IconButton } from "@material-ui/core";
import {SearchOutlined, MoreVert, AttachFile} from '@material-ui/icons'

function Chat() {
    return (
        <div className="chat">
            <div className="chat-header">
                <Avatar/>
                <div className="chat-header-info">
                    <h3>Name</h3>
                    <p>last seen at</p>
                </div>

                <div className="chat-header-right">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>

            <div className="chat-body">
                <p className="chat-message" >
                   <span className="chat-name">Harish</span>
                    This is a message
                    <span className="chat-timestamp">{new Date().toUTCString()}</span>
                </p>

                <p className="chat-message chat-rec" >
                   <span className="chat-name">Harish</span>
                    This is a message
                    <span className="chat-timestamp">{new Date().toUTCString()}</span>
                </p>

                <p className="chat-message" >
                   <span className="chat-name">Harish</span>
                    This is a message
                    <span className="chat-timestamp">{new Date().toUTCString()}</span>
                </p>

                <p className="chat-message chat-rec" >
                   <span className="chat-name">Harish</span>
                    This is a message
                    <span className="chat-timestamp">{new Date().toUTCString()}</span>
                </p>

                <p className="chat-message" >
                   <span className="chat-name">Harish</span>
                    This is a message
                    <span className="chat-timestamp">{new Date().toUTCString()}</span>
                </p>

                <p className="chat-message chat-rec" >
                   <span className="chat-name">Harish</span>
                    This is a message
                    <span className="chat-timestamp">{new Date().toUTCString()}</span>
                </p>

                <p className="chat-message" >
                   <span className="chat-name">Harish</span>
                    This is a message
                    <span className="chat-timestamp">{new Date().toUTCString()}</span>
                </p>

                <p className="chat-message chat-rec" >
                   <span className="chat-name">Harish</span>
                    This is a message
                    <span className="chat-timestamp">{new Date().toUTCString()}</span>
                </p>

                <p className="chat-message" >
                   <span className="chat-name">Harish</span>
                    This is a message
                    <span className="chat-timestamp">{new Date().toUTCString()}</span>
                </p>

                <p className="chat-message chat-rec" >
                   <span className="chat-name">Harish</span>
                    This is a message
                    <span className="chat-timestamp">{new Date().toUTCString()}</span>
                </p>
            </div>
        </div>
    )
}

export default Chat
