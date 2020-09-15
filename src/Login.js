import React from 'react';
import { Button } from '@material-ui/core';
import './Login.css';

function Login() {

    function signIn() {
            // sign in functionality
    } 

    return (
        <div className='login'>
            <div className='login__container'>
                <img 
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/WhatsApp_logo-color-vertical.svg/1200px-WhatsApp_logo-color-vertical.svg.png'
                    alt=''
                    />
                <div className='login__text'>
                    <h1>Sign in to WHatsApp</h1>
                </div>

                <Button type='submit' onClick={signIn}>
                    Sign in with Google
                </Button>
            </div>
        </div>
    )
}

export default Login;
