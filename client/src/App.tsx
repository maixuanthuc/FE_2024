// App.tsx
import React from 'react';
import Home from './pages/home/Home';
import Login from './pages/login/Login' ;
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/chat" element={<Home />} />


            </Routes>
        </Router>

    );
};

export default App;
