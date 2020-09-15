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
                    src='https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-1-1.png'
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
