import React from 'react';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            item: ''
        };
    }

    handleChanges = e=> {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.item);
    };

    render(){
        return(
            <form>
                <label>
                    <input 
                    type="text"
                    name="item"
                    value={this.item}
                    onChange={this.handleChanges}/>
                </label>
                <button onClick={this.handleSubmit}>Add to List</button>
                <button className="clear-btn" onClick={this.props.clearPurchased}>Clear Purchased</button>
            </form>
        );
    }
}

export default TodoForm;