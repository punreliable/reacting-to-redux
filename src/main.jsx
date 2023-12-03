import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit';
import allReducers from './reducers'

// STORE
const store = configureStore({ reducer: allReducers })

// DISPATCH (FIRE!!!)
ReactDOM.render(
  <React.StrictMode>
  <App />
</React.StrictMode>,
document.getElementById('root')
);
