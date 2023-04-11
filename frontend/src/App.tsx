import React from "react";
import "./App.css";
import Home from './components/Home';
import Profile from "./components/Profile";
import Login from "./components/Login";
import { Contacts } from "./components/Contacts";
import { TheGame } from "./components/TheGame";
import { Chanels } from "./components/Chanels";
import { Routes, Route, BrowserRouter as Router} from "react-router-dom";


function App() {
  return (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/thegame" element={<TheGame />} />
            <Route path="/chanels" element={<Chanels />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
       </Router>
  )
}

export default App;
