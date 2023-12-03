import { useState, useEffect } from 'react';
import punLogo from './assets/logo-punreliable.svg';
import './App.css'
import { useSelector } from 'react-redux';

function App() {

  const footerMessage = "A Punreliable person is everyone's friend.";
  const counter = useSelector( state => state.counter);

  return (
    <>
      <div>
        <a href="http://punreliable.com" target="_blank" rel="noreferrer">
          <img src={punLogo} className="logo" alt="Punreliable logo" />
        </a>
      </div>
      <h1>Counter</h1>
      <div className="card">
        <button>Increment</button>
        <p>{counter}</p>
      </div>
      <p className="read-the-docs">{footerMessage}</p>
    </>
  )
}

export default App
