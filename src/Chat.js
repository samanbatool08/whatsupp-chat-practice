import React, { useEffect, useState } from 'react';
import { Avatar, IconButton, Input } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined  } from '@material-ui/icons';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import './Chat.css';
import { useParams } from 'react-router-dom';
import db from './firebase.js';


function Chat() {
    const [seed, setSeed] = useState('');
    const [input, setInput] = useState('');
    const [roomName, setRoomName ] = useState("");
    const { roomId } = useParams();

    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
                setRoomName(snapshot.data().name)
            ))
        }
    }, [roomId])

    // useEffect(() => {
    //     if (roomId) {
    //       db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
    //           setRoomName(snapshot.data().name)
    //       ))      
    //     }
    // }, [roomId])

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 500))
    }, [])

    function sendMessage(e) {
        e.preventDefault();
        console.log('you typed:', input)

        setInput('');
    }

    return (
        <div className='chat'>
            <div className='chat__header'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                    <div className='chat__headerInfo'>
                        <h3>{roomName}</h3>
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
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder='Type a message'
                    type='text'/>
                <button
                    onClick={sendMessage}
                    type='submit'>
                        Send a message</button>
            </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat;
 