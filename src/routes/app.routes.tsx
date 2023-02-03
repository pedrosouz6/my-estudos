import { Routes, Route } from 'react-router-dom';

import { Notes } from '../components/pages/Notes';
import { Material } from '../components/pages/Material';

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Notes />} />
            <Route path='/material' element={<Material />} />
        </Routes>
    )
}