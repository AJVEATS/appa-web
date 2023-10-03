'use client'
import { useState } from "react";


const CreateAccountComponent = () => {

    return (
        <div class='flex flex-wrap py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 h-fit'>
            <p class='text-black w-full' >Create an account</p>
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
        </div>
    )
}

export default CreateAccountComponent