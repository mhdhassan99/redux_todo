import React from 'react';
import TodoItem from './TodoItem'

const todoList = () => {
    return (
        <div className="my-4">
            
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    );
}

export default todoList;
