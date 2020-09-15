import React from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SideBarOption from "./SideBarOption";
import InsertCommentIcon from '@material-ui/icons/InsertComment';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className = "sidebar__info">
        <h2>REFLEX </h2>
        <h3>
          <FiberManualRecordIcon />
          Lokesh Tiwari
        </h3>
        
        </div>
        <CreateIcon/>
        
      </div>
      <SideBarOption Icon= {InsertCommentIcon} title = "Threads" />
      <SideBarOption  title = "Youtube" />
    </div>
  );
}

export default Sidebar;
