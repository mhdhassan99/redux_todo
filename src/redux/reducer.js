import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from './action'
import { todos } from './states'

export let reducer = (state = todos, action) => {
    let newTodos;
    switch (action.type) {
        
        case ADD_TODO: 
            newTodos = [...state];
            newTodos.push(action.payload);
            return newTodos;
            
        case DELETE_TODO: 
            newTodos = [...state];
            newTodos = newTodos.filter(todo => todo.id != action.payload);
            return newTodos;

        case UPDATE_TODO:
            newTodos = [...state];
            let index = newTodos.indexOf(action.payload);
            if (index != -1) {
                newTodos[index] = {
                    ...newTodos[index],
                    name: action.payload,
                }
                return newTodos
            }
    }
    return state; 
}