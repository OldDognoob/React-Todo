import React, {Component} from "react";

import Todo from "./Todo";

export default class TodoList extends Component {
  render(){
    return <div>


      <ul className="todo-container">
        {
          this.props.todos.map(todo =>(
            //  <li>todo.task</li>
            <Todo 
            handleComplete={this.props.handleComplete}
            key={todo.id} 
            todo={todo} 
            />
          ))
          
        }
      </ul>
    </div>;
  }
}













// const TodoList = props =>{
//     return(
//       <div className="todo-list">
//          {props.groceries.map(item => (
//         <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
//       ))}
//       </div>
//     );
// };

// export default TodoList;

// const TodoList = props =>{
//   return(
//     <div>
//       {this.props.todos.map(todo =>{
//         return(
//           <Todo 
//           todo={todo} 
//           markCompleted={event => this.props.markCompleted(todo.id)}
//           />
//         )
//       })}
//     </div>
//   );
// };

// export default TodoList;

// const TodoList = props =>{
//   console.log(props);
//   return(
//     <div className="todo-list">
//       {props.todos.map(todo=>{
//         return <Todo todo={todo}  key={todo.id}  markCompleted={props.markCompleted} />
//       })}
//     </div>
//   );
// };

// export default TodoList;

