import React from "react";
import "./App.css";
import { Home } from './components/Home';
import { Nikname } from "./components/Nikname";
import { Login } from "./components/Login";
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
            <Route path="/nikname" element={<Nikname />} />
          </Routes>
       </Router>
  )
}

export default App;
