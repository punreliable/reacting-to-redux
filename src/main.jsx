import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createStore } from 'redux';


// STORE ACTION
const increment = () => {
  return {
    type: 'INCREMENT',


  };
};

// REDUCER
const counterReducer = ( state = 0, action ) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
  }
}

// STORE
let store = createStore(counterReducer);





// DISPATCH (FIRE!!!)


ReactDOM.render(

  document.getElementById('root')).render(
    store.subscribe( () => console.log( store.getState() ) ) )
    store.dispatch( increment() );

  <React.StrictMode>
    <App />
  </React.StrictMode>,

)
