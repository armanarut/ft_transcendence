import React from 'react';
import './App.css';
import Nikname from './components/Nikname';
import Login from './components/Login';
import aaa from "./images/pong.jpg"

function App() {
  return (
    <h1 className="sm:text-center container pt-5 text-2xl font-bold">

      <a href="#" className="px-10 text-1xl mx-14 font-semibold leading-7 text-gray-900">Login</a>
      <a href="#" className="px-10 text-1xl mx-14 font-semibold leading-7 text-gray-900">Contacts</a>
      <a href="#" className="px-10 text-1xl mx-14 font-semibold leading-7 text-gray-900">THE GAME</a>
      <a href="#" className="px-10 text-1xl mx-14 font-semibold leading-7 text-gray-900">Chanels</a>
      <a href="#" className="px-10 text-1xl mx-14 font-semibold leading-7 text-gray-900">Nikname</a>
      <img className="px-28 pt-6 absalute left-0 top-0 w-full h-full z-10" src={aaa} alt="" height="600px" width="800px" ></img>
    </h1>
  );
}

// <Login/>

export default App;
