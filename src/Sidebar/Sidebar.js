import React from "react";
import "./Sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {SearchOutlined} from '@material-ui/icons'
import SidebarChat from "../SidebarChat/SidebarChat";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Avatar />
        <div className="sidebar-header-right">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar-search">
          <div className="sidebar-search-container">
              <SearchOutlined/>
              <input type="text" placeholder="Search or Start a new chat" />
          </div>
      </div>

      <div className="sidebar-chats">
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
        
      </div>
    </div>
  );
}

export default Sidebar;
