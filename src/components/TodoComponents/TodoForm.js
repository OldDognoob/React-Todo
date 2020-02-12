// import React from 'react';

// class TodoForm extends React.Component {
//     constructor(){
//         super();
//         this.state = {
//             item: ''
//         };
//     }

//     handleChanges = e=> {
//         this.setState({
//             [e.target.name]: e.target.value
//         });
//     };

//     handleSubmit = e => {
//         e.preventDefault();
//          // prevents the event of a click from refreshing the page
//         this.props.addItem(this.state.item);
//     };

//     render(){
//         return(
//             <form>
//                 <label>
//                     <input 
//                     type="text"
//                     name="item"
//                     value={this.item}
//                     onChange={this.handleChanges}/>
//                 </label>
//                 <button onClick={this.handleSubmit}>Add to List</button>
//                 <button className="clear" onClick={this.props.clearPurchased}>Clear Purchased</button>
//             </form>
//         );
//     }
// }

// export default TodoForm;

import React, {Component} from 'react';

class TodoForm extends Component {
    render(){
        return(
            <div>
                <input onChange={this.props.valueChange}></input>
                <button onClick={this.props.addTodo}>Add Todo</button>
                <button onClick={this.props.clearCompleted}>Clear Completed</button>
               
            </div>
        )
    }
}

export default TodoForm;