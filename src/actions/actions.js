import * as actionType from './actionTypes'

export const addTodo = ({ id, text }) => ({
    type: actionType.ADD_TODO,
    payload: {
        id,
        text
    }
})

export const removeTodo = id => ({
    type: actionType.REMOVE_TODO,
    payload: id
})

export const doneTodo = ({ id, isDone }) => ({
    type: actionType.DONE_TODO,
    payload: {
        id: id,
        isDone: isDone
    }
})