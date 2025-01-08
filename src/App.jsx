import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ContentManagement from './pages/ContentManagement';
import MarketingCreation from './pages/MarketingCreation';

export default function App(){
    return (
        <div className="min-h-screen h-full text-gray-800">
            <Router>
                <Navigation />
                <Routes>
                    <Route path="/" element={<ContentManagement />} />
                    <Route path="/marketing" element={<MarketingCreation />} />
                </Routes>
            </Router>
        </div>
    )
}