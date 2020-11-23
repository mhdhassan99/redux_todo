import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/action'
import { updateTodo } from '../redux/action'
import { useState } from 'react'

const TodoItem = ( {todo} ) => {
    
    let dispatch = useDispatch()
    const [editable, setEditable] = useState(false);
    const [name, setName] = useState('');

    debugger
    return (
        <div>
            <div className="row mx-2 align-items-center">
                <div>#{todo.id.length > 1 ? todo.id[2] : todo.id}</div>
                <div className="col" >
                    {editable ? <input type="text" className="form-control" 
                        
                        value={name}
                        onChange={
                            (e) => setName(e.target.value)
                        }

                    /> : <h4>{todo.name}</h4>}
                </div>

                <button 
                    onClick={() => {
                        dispatch(updateTodo(
                            {
                                ...todo,
                                name: name
                            }
                        ))

                        if (editable) {
                            setName(todo.name)
                        }
                        setEditable(!editable); 
                    }}
                    className="btn btn-primary mx-2" >
                {editable ? "Update": "Edit"}</button>
                <button className="btn btn-danger mx-2" onClick={() => dispatch(deleteTodo(todo.id))}> Delete</button>
            </div>
        </div>
    );
}

export default TodoItem;
