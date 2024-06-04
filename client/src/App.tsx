// App.tsx
import React, {useState} from 'react';
import Home from './pages/home/Home';
import Login from './pages/login/Login' ;
import './App.css';
import Register from './pages/resgister/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { getDatabase, ref, child, get } from "firebase/database";
import { db } from './firebase/firebaseConfig';
import userList from "./pages/userList";
function App() {
    const [userId, setUserId] = useState("");
    const getUserId = (id: React.SetStateAction<string>) => {
        console.log(id);
        setUserId(id);
    }
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/chat" element={<Home />} />
                <Route path="/reg" element={<Register />} />
                <Route path="/" element={<Login />} />

            </Routes>
        </Router>

    );
}

export default App;
