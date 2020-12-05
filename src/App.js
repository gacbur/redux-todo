import React from 'react';
import './App.css';

import { useDispatch, useSelector } from 'react-redux'

import Todo from './components/Todo'

const App = () => {

  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <Todo todos={todos} dispatch={dispatch} />
    </div>
  );
}

export default App;
