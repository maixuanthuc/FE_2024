// App.tsx
import React, {useEffect} from 'react';
import Home from './pages/home/Home';
import Login from './pages/login/Login' ;
import './App.css';
import Register from './pages/resgister/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SocketService from "./service/SocketService";


const App: React.FC = () => {
    useEffect(() => {
        // Establish socket connection
        SocketService.connect();

        // Clean up socket connection on unmount
        return () => {
            SocketService.disconnect();
        };
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/chat" element={<Home />} />
                <Route path="/reg" element={<Register/>} />
                <Route path="/" element={<Login/>} />
            </Routes>
        </Router>

    );
};

export default App;
