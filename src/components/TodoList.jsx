import React from 'react';
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux';

const TodoList = () => {

    let todos = useSelector(state => state)
    return (
        <div className="my-4">
            {todos.map(todo => {
                return <TodoItem key={todo.id} />
            })}
        </div>
    );
}

export default TodoList;
