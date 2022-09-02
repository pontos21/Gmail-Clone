import { Button } from '@mui/material';
import React from 'react';
import { auth, provider } from './firebase';
import './Login.css'
import { login } from './features/userSlice'
import { useDispatch } from 'react-redux';

const Login = () => {
    const dispatch = useDispatch()
    const signIn = () => {
    auth
    .signInWithPopup(provider)
    .then(({ user }) => {
        dispatch(login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
        }))
    })
    .catch(error => alert(error.message))
    } 
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg" alt=""></img>
                <Button variant="contained" color="primary" onClick={signIn}>Login</Button>
            </div>
        </div>
    );
}

export default Login;
