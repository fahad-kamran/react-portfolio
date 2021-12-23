import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Home from '../Screen/Home';
import Projectdetailed from '../Screen/Project_detailed'

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/project-detail/:id" element={<Projectdetailed />} />
            </Routes>
        </BrowserRouter>
    )
}
