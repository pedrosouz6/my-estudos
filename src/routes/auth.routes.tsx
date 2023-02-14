import { Routes, Route } from 'react-router-dom';
import { Login } from '../pages/Login';
import { CreateAccount } from '../pages/CreateAccount';

export function AuthRoutes() {
    return (
        <Routes>
            <Route path="*" element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/create-account' element={<CreateAccount />} />
        </Routes>
    )
}