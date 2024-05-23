// App.tsx
import React from 'react';
import Home from './components/Home';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from "./components/LoginForm";
import Register from "./components/Register";



const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginForm />} />
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register/>} />

            </Routes>
        </Router>

    );
};

export default App;
