import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createStore } from 'redux'
import allReducers from './reducers'

// STORE
let store = createStore( allReducers )

// DISPATCH (FIRE!!!)
ReactDOM.createRoot(
  <React.StrictMode>
  <App />
</React.StrictMode>,
document.getElementById('root')
);
