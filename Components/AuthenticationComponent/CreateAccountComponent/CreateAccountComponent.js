'use client'
import { useState } from "react";


const CreateAccountComponent = ({ changeComponent }) => {

    const CreateAccount = () => {
        console.log('CreateAccount');
    };

    return (
        <div>
            <p >Create an account</p>
            <form>
                <input
                    name='createAcccountEmail'
                    type='email'
                    placeholder="Email" />
                <input
                    name='createAccountPassword'
                    type='password'
                    placeholder="Password" />
                <input
                    name='createAccountPasswordConfirm'
                    type='password'
                    placeholder='Confirm Password' />
            </form>
            <div>
                <button
                    type='button'
                    value=''
                    onClick={() => CreateAccount()}>
                    Create account
                </button>
                <button
                    type='button'
                    value=''
                    onClick={() => changeComponent('LoginComponent')}>
                    Already a member
                </button>
            </div>
        </div>
    )
}

export default CreateAccountComponent;