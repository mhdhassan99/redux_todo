import React, { useState } from 'react';
import { v1 as uuid } from 'uuid';
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/action'


const TodoInput = () => {
    let dispatch = useDispatch();
    let [name, setName] = useState();
    return (
        <div>
            <div className="row m-2">
                <input 
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text" className="col form-control"></input>
                    
                <button 
                    onClick={() => {
                        dispatch(
                            addTodo (
                            {
                                id: uuid(),
                                name: name 
                            }
                        ))
                        setName('');
                    }}
                    className="btn btn-primary mx-2"> Add </button>
            </div>  
        </div>
    );
}

export default TodoInput;
