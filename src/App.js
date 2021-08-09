import React, {useState} from 'react';
import Navbar from './routes/Navbar';
import Router from './routes/Router';
import './App.css';


function App() {

  return (
    <div className="App">
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
