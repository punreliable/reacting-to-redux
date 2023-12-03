import { useState, useEffect } from 'react';
import punLogo from './assets/logo-punreliable.svg';
import './App.css'

function App() {

  const footerMessage = "A Punreliable person is everyone's friend.";
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={punLogo} className="logo" alt="Vite logo" />
        </a>

      </div>

      <h1>Counter</h1>

      <div className="card">

        <button onClick={() => setCount((count) => count + 1)}>Increment</button>
        <p>{count}</p>

      </div>

      <p className="read-the-docs">{footerMessage}</p>

    </>
  )
}

export default App
