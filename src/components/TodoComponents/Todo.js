import React from 'react';

const Todo = props =>{
    return (
       <div 
       onClick={props.togglePurchased}
       className={`todo${props.todo.purchased ? 'purchased' : ""}`}
       >
       <p>{props.todo.name}</p>
       </div>
    );
};

export default Todo;