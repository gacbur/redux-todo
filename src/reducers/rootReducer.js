import * as actionType from '../actions/actionTypes'

const initialState = {
    todos: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_TODO:
            return {
                todos: [...state.todos, {
                    id: action.payload.id,
                    text: action.payload.text,
                    isDone: false
                }]
            }
        case actionType.DONE_TODO:
            return {
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        return {
                            ...todo, isDone: !action.payload.isDone
                        }
                    } else {
                        return todo
                    }
                })
            }
        case actionType.REMOVE_TODO:
            return {
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        default:
            return state
    }
}

export default rootReducer