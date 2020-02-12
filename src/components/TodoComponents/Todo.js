// import React from "react";

// const Todo = props =>{
//     return (
//         <div
//         //we have access to full item, we have access to purchased
//           className={`item${props.item.purchased ? ' purchased' : ''}`}
//           //we have access to id
//           // we are  calling toggle with the correct id
//           //we have access to the id 
//           //an event click take a function and then it passes to that function an event object
//           onClick={() => props.toggleItem(props.item.id)}
//         >
//           <p>{props.item.name}</p>
//         </div>
//       );
// };

// export default Todo;

import React, {Component} from  'react';

class Todo extends Component {
  render(){
    const color = this.props.todo.completed ? 'pink' : 'blue';
    return(
      <div key={this.props.todo.id}>{this.props.todo.task}
      <button onClick={this.props.markCompleted}>check</button>
  
      </div>
    )
  }
}

export default Todo;

// class Todo extends Component {
//   return(){
//     <div className={`item${props.item.completed ? "completed" : ""}`}
//     onClick={()=>this.props.markCompleted(props.item.id)}
//     >
//       <p>{this.props.item.task}</p>

//     </div>
//   };
// };

// export default Todo;