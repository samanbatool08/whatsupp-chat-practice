import React, { useEffect, useState } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined  } from '@material-ui/icons';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import './Chat.css'

function Chat() {
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 500))
    }, [])

    return (
        <div className='chat'>
            <div className='chat__header'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                    <div className='chat__headerInfo'>
                        <h3>Room name</h3>
                        <p>Last seen at...</p>
                    </div>

                    <div className='chat__headerRight'>
                         <IconButton>
                             <SearchOutlined />
                         </IconButton>
                         <IconButton>
                             <AttachFile />
                         </IconButton>
                         <IconButton>
                             <MoreVert />
                         </IconButton>
                    </div>
            </div>

            <div className='chat__body'>
                <p className={`chat__message ${true && 'chat__receiver'}`}>
                    <span className='chat__name'>Saman Batool</span>
                    Hey guys!!
                    <span className='chat__timestamp'>3:50pm</span>
                </p>
                
            </div>

            <div className='chat__footer'>
                <InsertEmoticonIcon />
            <form>
                <input 
                    placeholder='Type a message'
                    type='text'/>
                <button>Send a message</button>
            </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat;
