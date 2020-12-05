import React, { useState } from 'react'

import uuid from 'react-uuid'

import { addTodo, removeTodo, doneTodo } from '../actions/actions'

const Todo = ({ todos, dispatch }) => {

    const [text, setText] = useState('')
    const [alertEmpty, setAlertEmpty] = useState(false)

    const handleAddTodo = () => {

        if (text !== "") {
            dispatch(addTodo({
                id: uuid(),
                text: text
            }))
            setText('')
            setAlertEmpty(false)
        } else {
            setAlertEmpty(true)
        }
    }

    const handleTaskDone = (id, isDone) => {
        dispatch(doneTodo({
            id,
            isDone
        }))
    }

    return (
        <div className="todo">
            <div className="add-todo">
                <input
                    type="text"
                    value={text}
                    placeholder={alertEmpty ? "Write something first!" : ''}
                    onChange={(e) => setText(e.target.value)}>
                </input>
                <button onClick={() => handleAddTodo()}>Add</button>
            </div>
            <div className="todo-list">
                <ul>
                    {todos.length > 0 ? todos.map(todo => (
                        <>
                            <div className="todo-item">
                                <li
                                    key={todo.id}
                                    onClick={() => handleTaskDone(todo.id, todo.isDone)}
                                >{todo.text}</li>
                                <button onClick={() => dispatch(removeTodo(todo.id))}>x</button>
                            </div>
                        </>
                    )) : <div className="todo-list-empty">The list is empty!</div>}
                </ul>
            </div>
        </div >
    )
}

export default Todo
