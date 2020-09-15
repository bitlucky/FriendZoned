import React from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h2> Hello lokesh tiwari </h2>
        <h3>
          <FiberManualRecordIcon />
          Lokesh Tiwari
        </h3>
      </div>
    </div>
  );
}

export default Sidebar;
