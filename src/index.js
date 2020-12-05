import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './reducers/rootReducer'

const saveToLocalStorage = (state) => {
  try {
    const todoState = JSON.stringify(state)
    localStorage.setItem("todos", todoState)
  } catch (e) {
    console.log(e)
  }
}

const loadFromLocalStorage = () => {
  try {
    const todoState = localStorage.getItem('todos')
    if (todoState === null) {
      return undefined
    } else {
      return JSON.parse(todoState)
    }
  } catch (e) {
    console.log(e)
    return undefined
  }
}

const todoState = loadFromLocalStorage()

const store = createStore(
  rootReducer,
  todoState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => saveToLocalStorage(store.getState()))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
