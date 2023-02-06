import { Routes, Route } from 'react-router-dom';

import { Notes } from '../pages/Notes';
import { Material } from '../pages/Material'; 

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Notes />} />
            <Route path='/material' element={<Material />} />
        </Routes>
    )
}