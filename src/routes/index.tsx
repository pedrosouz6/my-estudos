import { useState } from 'react';  
import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

import { auth, onAuthStateChanged } from '../service/firebase';

export function Routes() {

    const [ isLoggedUser, setIsLoggedUser ] = useState<boolean | null>(null);

    onAuthStateChanged(auth, (user) => {
        if (user) {         
            localStorage.setItem('uid_user', user.uid);
            setIsLoggedUser(true);
        } else {
            localStorage.removeItem('uid_user');
            setIsLoggedUser(false);
        }
    });

    return (    
        <BrowserRouter>
            { isLoggedUser === false ? <AuthRoutes /> : <AppRoutes /> }
        </BrowserRouter>
    )
}