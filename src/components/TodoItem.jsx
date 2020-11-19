import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/action'

const TodoItem = ( {todo} ) => {
    let dispatch = useDispatch()
    return (
        <div>
            <div className="row mx-2 align-items-center">
                <div>#{todo.id}</div>
                <div className="col" >{todo.name}</div>
                <button className="btn btn-primary mx-2" >Edit</button>
                <button className="btn btn-danger mx-2" onClick={() => dispatch(deleteTodo(todo.id))}> Delete</button>
            </div>
        </div>
    );
}

export default TodoItem;
