import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import { Provider } from 'react-redux'
//import { store } from 'store/reduxStore'
import { configureStore } from '@reduxjs/toolkit'
import './index.scss'
import allReducers from './reducers'
import { createRoot } from 'react-dom/client'

const store = configureStore({ reducer: allReducers })
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App /></Provider>);
