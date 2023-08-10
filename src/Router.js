import React from 'react'
import Apps from './Pages/Public/AppS';
import Datenschutz from './Pages/Public/Datenschutz';
import AboutUs from './Pages/Public/AboutUs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Impressum from './Pages/Public/Impressum';

function Router() {

return (
    <>
        <BrowserRouter >
            {/* REACT ROUTER ROUTES */}
            <Routes>
                {/* PUBLIC PAGES */}
                <Route path='/' element={<Apps />} />
                <Route path='/datenschutz' element={<Datenschutz />} />
                <Route path='/about-us' element={<AboutUs />} />
                <Route path='/impressum' element={<Impressum />} />
            </Routes>
        </BrowserRouter>
    </>
)}

export default Router