import React from 'react';
import './App.css';
import Product from './components/Product';

function App() {
  return (
    <h1 className="text-3xl font-bold underline text-blue-600">
      <Product />
      <Product />
      <Product />
      <Product />
    </h1>
  );
}

export default App;
