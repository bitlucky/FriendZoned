import React from 'react';
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpIcon from '@material-ui/icons/Help';
import SearchIcon from '@material-ui/icons/Search';
import "./Header.css"

function Header() {
    return (
        <div className="header">
            <div className = "header_left"> 
                {/* Avatars for logged in user */}
                <Avatar 
                className = "header_avatar"
                alt = "rMr. Reflex"
                src=''
                />
                {/* Time icon */}
                <AccessTimeIcon/>
            </div>

            <div className = "header_right">
            {/* Search Icon  */}
            <SearchIcon/>
            {/* Input  */}
            </div>

            <div className = "header_right">
                {/* Help icon  */}
                <HelpIcon/>

            </div>

        </div>
    )
}

export default Header
