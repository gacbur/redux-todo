import React, { useState } from 'react'
import { connect } from 'react-redux'

import uuid from 'react-uuid'

import { addTodo, removeTodo, doneTodo } from '../actions/actions'

const Todo = ({ todos, addTodo, removeTodo, doneTodo }) => {

    const [text, setText] = useState('')
    const [alertIsEmpty, setAlertIsEmpty] = useState(false)


    const handleAddTodo = () => {
        if (text !== '') {
            addTodo({
                id: uuid(),
                text,
                isDone: false
            })

            setText('')
            setAlertIsEmpty(false)
        }
        else {
            setAlertIsEmpty(true)
        }
    }

    const handleTodoDelete = (id) => {
        removeTodo(id)
    }

    const handleTaskComplete = (id, isDone) => {
        doneTodo({
            id,
            isDone
        })
    }


    return (
        <div className="todo">
            <div className="add-todo">
                <input
                    type="text"
                    value={text}
                    placeholder={alertIsEmpty ? "Write something first!" : ''}
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
                                    className={todo.isDone ? 'done' : ''}
                                    key={todo.id}
                                    onClick={() => handleTaskComplete(todo.id, todo.isDone)}
                                >{todo.text}</li>
                                <button onClick={() => handleTodoDelete(todo.id)}>x</button>
                            </div>
                        </>
                    )) : <div className="todo-list-empty">The list is empty!</div>}
                </ul>
            </div>
        </div >
    )
}

const mapStateToProps = state => ({ todos: state.todos })
const mapDispatchToProps = dispatch => {
    return {
        addTodo: payload => dispatch(addTodo(payload)),
        removeTodo: payload => dispatch(removeTodo(payload)),
        doneTodo: payload => dispatch(doneTodo(payload)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Todo)
