//import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import punLogo from './assets/logo-punreliable.svg'
import './App.css'
import Nav from './Nav'

const App = () => {

  const footerMessage = "A Punreliable person is everyone's friend.";
  const counter = useSelector( state => state.counter);
 const dispatch = useDispatch();

  return (
    <>
      <div>
        <a href="http://punreliable.com" target="_blank" rel="noreferrer">
          <img src={punLogo} className="logo" alt="Punreliable logo" />
        </a>
      </div>
      <h1>Counter</h1>
      <div className="card">
        <button onClick={ () => { dispatch( { type:"INCREMENT" } )} }>
          Increment
        </button>
        <p>{counter}</p>
      </div>
      <Nav />
      <p className="read-the-docs">
        {footerMessage}
      </p>
    </>
  )
}

export default App
