'use client'
import { useState } from "react";


const LoginComponent = () => {

    return (
        <div class='flex flex-wrap py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 h-fit'>
            <p class='text-black'>LoginComponent</p>
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
        </div>
    )
};
export default LoginComponent;