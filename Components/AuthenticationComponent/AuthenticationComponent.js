'use client'
import { useState } from "react";
import CreateAccountComponent from "./CreateAccountComponent/CreateAccountComponent";
import LoginComponent from "./LoginComponent/LoginComponent";


const AuthenticationComponent = () => {
    const [currentComponent, setCurrentComponent] = useState('CreateAccountComponent');

    const handleCurrentComponent = () => {

        if (currentComponent === 'CreateAccountComponent') {
            return (
                <CreateAccountComponent
                    changeComponent={setCurrentComponent} />
            );
        } else if (currentComponent === 'LoginComponent') {
            return (
                <LoginComponent
                    changeComponent={setCurrentComponent} />
            );
        };
    };

    return (
        <div>
            {handleCurrentComponent()}
        </div>
    )
};
export default AuthenticationComponent;