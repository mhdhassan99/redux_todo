import React from 'react';

const TodoItem = () => {
    return (
        <div>
            <div className="row mx-2 align-items-center">
                <div>#1</div>
                <div className="col" >Todo Title</div>
                <button className="btn btn-primary mx-2" >Edit</button>
                <button className="btn btn-danger mx-2" >Delete</button>
            </div>
        </div>
    );
}

export default TodoItem;
