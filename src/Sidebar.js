import React from 'react';
import { Avatar } from '@material-ui/core';
import './Sidebar.css'

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
            <Avatar />
            <div className='sidebar__headerRight'>

            </div>
            </div>

            <div className='sidebar__search'>


            </div>

            <div className='sidebar__chats'>



            </div>
        </div>
    )
}

export default Sidebar;
