import React from "react";

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

import './components/TodoComponents/Todo.css';

const groceriesData = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  //constructor with state
  constructor() {
    //super keyword for classes
    super();
    //set a state that you can access an instance of a class
    this.state = {
      //state and class components are on object
      name: "",
      groceries: groceriesData
    };
  }
  toggleItem = id => {
    //update groceries on our state object
    console.log(id);
    //using this.setState
    //looping through the array
    this.setState({
      //pull all the items from the list and map
      //(method of arrays in JS that will take an array the groceries that map is off of it)
      //and sends that array in to a function
      groceries: this.state.groceries.map(item => {
        //1.if the item we mapping over is the item we are interesting in , 
        //2.the don't return the item back instead return a new object that have all the values of the item except flipping purchased
        
        //1.1 each item in that array to a function
        //1.2 and whatever we return back to this function
        if(item.id === id) {
          //1.3 if item.id equals id and for that we want to return a nw item object
          return {
               //1.4 and this new item object its going to copy all the values of the existing item
            ...item,
              //1.5 except we want purchased to be modified
            purchased: !item.purchased
             //1.6 and we want to toggle the purchased by taking the opposite
          };
        }else{
          return item;
        }
      })
    });
  };


  addItem=itemName=>{
    // add an item from the form to our list
    // with a new name, purchased false and id of date
    const newItem = {
      name:itemName,
      id:Date.now(),
      purchased: false
    };
    this.setState({
      //we spreading the array of groceries with a new item
      groceries:[...this.state.groceries, newItem]
    });
  };

  clearPurchased=()=>{
    this.setState({
      // we going to filter out all the items of the list that are true.
      //is like map 
      //(in filter if you return back true then that item is kept inside the list if it is false the item in not inside the list)
      groceries:this.state.groceries.filter(item =>!item.purchased)
    });
  };


  render() {
    return(
      <div className="App">
        <div className="header">
          <h1>Welcome to my Todo List</h1>
          <TodoForm addItem={this.addItem}/>
        </div>
        <TodoList 
        groceries={this.state.groceries}
        toggleItem={this.toggleItem}
        clearPurchased={this.clearPurchased}
        />
      </div>
    );
  }
}

export default App;

