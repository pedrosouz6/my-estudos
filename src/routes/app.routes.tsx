import { Routes, Route } from 'react-router-dom';

import { Notes } from '../pages/Notes';
import { Material } from '../pages/Material'; 
import { Studied } from '../pages/Studied';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="*" element={<Material />} />
            <Route path='/notes' element={<Notes />} />
            <Route path='/material' element={<Material />} />
            <Route path='/studied' element={<Studied />} />
        </Routes>
    )
}