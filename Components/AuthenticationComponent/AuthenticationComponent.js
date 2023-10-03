'use client'
import { useState } from "react";
import CreateAccountComponent from "./CreateAccountComponent/CreateAccountComponent";
import LoginComponent from "./LoginComponent/LoginComponent";


const AuthenticationComponent = () => {

    return (
        <div>
            <CreateAccountComponent />
            <LoginComponent />
        </div>
    )
};
export default AuthenticationComponent;