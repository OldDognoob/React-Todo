import React from "react";

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

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
  constructor() {
    super();
    this.state = {
      name: "",
      groceries: groceriesData
    };
  }
  toggleItem = id => {
    this.setState({
      groceries: this.state.groceries.map(item => {
        if(item.id === id) {
          return {
            ...item,
            purchased: !item.purchased
          };
        }else{
          return item;
        }
      })
    });
  };


  addItem=itemName=>{
    const newItem = {
      name:itemName,
      id:Date.now(),
      purchased: false
    };
    this.setState({
      groceries:[...this.state.groceries, newItem]
    });
  };

  clearPurchased=()=>{
    this.setState({
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
    )
  }
}

export default App;