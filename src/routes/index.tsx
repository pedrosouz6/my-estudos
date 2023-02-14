import { useState } from 'react';  
import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

import { auth, onAuthStateChanged } from '../service/firebase';

export function Routes() {

    const [ isLoggedUser, setIsLoggedUser ] = useState<boolean>(false);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setIsLoggedUser(true);

        } else {
            setIsLoggedUser(false);
        }
    });

    return (    
        <BrowserRouter>
            { isLoggedUser ? <AppRoutes /> : <AuthRoutes /> }
        </BrowserRouter>
    )
}