import React from 'react';
import './App.css';
import Nikname from './components/Nikname';
import Login from './components/Login';
import imageToAdd from '../images/PingPong_1200x630.jpeg'


function App() {
  return (
    <h1 className="container mx-auto mix-w-2xl pt-5 text-2xl font-bold ">
      <a href="#" className="text-1xl mx-11 font-semibold leading-7 text-gray-900">Login</a>
      <a href="#" className="text-1xl mx-11 font-semibold leading-7 text-gray-900">Contacts</a>
      <a href="#" className="text-1xl mx-11 font-semibold leading-7 text-gray-900">THE GAME</a>
      <a href="#" className="text-1xl mx-11 font-semibold leading-7 text-gray-900">Chanels</a>
      <a href="#" className="text-1xl mx-11 font-semibold leading-7 text-gray-900">Nikname</a>

    </h1>
  );
}

// <Login/>

export default App;
