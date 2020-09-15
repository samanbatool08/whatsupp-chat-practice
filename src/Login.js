import React from 'react';
import { Button } from '@material-ui/core';
import './Login.css';
import { auth, provider } from './firebase';

function Login() {

    function signIn() {
            // sign in functionality
            auth
                .signInWithPopup(provider)
                .then((result) => console.log(result))
                .catch((error) => alert(error.message))
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
