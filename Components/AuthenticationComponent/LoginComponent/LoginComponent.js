'use client'
import { useState } from "react";


const LoginComponent = ({ changeComponent }) => {

    const login = () => {
        console.log('login');
    };

    return (
        <div>
            <p>LoginComponent</p>
            <form>
                <input
                    name='loginEmail'
                    type='email'
                    placeholder='Email' />
                <input
                    name='loginPassword'
                    type='password'
                    placeholder='Password' />
            </form>
            <button
                type='button'
                value=''
                onClick={() => login()}>login</button>

            <button
                type='button'
                value=''
                onClick={() => changeComponent('CreateAccountComponent')}>
                I'm new here
            </button>
        </div>
    )
};
export default LoginComponent;