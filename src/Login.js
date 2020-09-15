import React from 'react';
import { Button } from '@material-ui/core';
import './Login.css';
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider.js';
import { actionTypes } from './reducer';


function Login() {

    const[{}, dispatch] = useStateValue();

    function signIn() {
            // sign in functionality 
            // firebase auth setup enable with google
            auth
                .signInWithPopup(provider)
                .then((result) => {
                    dispatch({
                        type: actionTypes.SET_USER,
                        user: result.user,
                    })
                })
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
                    <h1>Sign in to WhatsApp</h1>
                </div>

                <Button type='submit' onClick={signIn}>
                    Sign in with Google
                </Button>
            </div>
        </div>
    )
}

export default Login;
