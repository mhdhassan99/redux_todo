import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from './action'
import { todos } from './states'

export let reducer = (state = todos, action) => {
    switch (action.type) {
        case ADD_TODO: 
            break;
        case DELETE_TODO: 
            break;
        case UPDATE_TODO:
            break;
        default:
            return state;
    }
}